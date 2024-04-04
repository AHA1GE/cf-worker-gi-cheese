// https://github.com/AHA1GE/cf-worker-gi-cheese
import { request } from "@octokit/request";
import { config } from "./config.js"; //页面设置
import { htmlBase } from "./htmlBase.js"; //写死的html基础模板
import { css } from "./css.js"; //写死的css样式

/** 用来获取下载地址的函数
 * @param url 项目地址，例如：“https://github.com/kindawindytoday/Minty-Releases”
 * @param astIndex Asset的索引，默认0，第一个
 * @returns {string}  以字符串返回的下载地址，例如：“https://github.com/kindawindytoday/Minty-Releases/releases/download/4.4.0.1/minty.zip”
 * @description 该函数接受项目地址，返回指定索引的asset的下载地址。
 **/
async function getAssetsUrl(url: string, astIndex: number): Promise<string> {
    // 如果项目地址不是github地址，直接返回项目地址
    if (!url.startsWith("https://github.com")) { return url; } else {
        try {
            // 从项目地址中提取用户名和项目名
            const [username, project] = url.split("/").slice(-2);
            // 从github api获取release信息
            const response = await request('GET /repos/{owner}/{repo}/releases/latest', {
                owner: username,
                repo: project,
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                }
            })
            const release = response.data.assets[astIndex].browser_download_url;
            return release;
        } catch (error: any) {
            // 如果获取失败，直接返回项目地址+最新发布页,容错'/'结尾问题
            // 常见获取失败的原因是API调用超出速率限制
            // Common fail reason is "API call rate limit exceeded"
            return url + url.endsWith("/") ? '' : '/' + "releases/latest";
        }
    }
}

/** 用来构造代理访问地址的函数
 * @param url 目标地址，例如：“https://example.com”
 * @returns {string}  以字符串返回的代理访问地址，例如：“https://p.ahaigege.com/proxy/https://example.com”
 * @description 该函数接受目标地址，返回代理访问地址。
 */
function getProxiedUrl(proxier: string, url: string): string {
    return proxier + url;
}

/** 用来构造项目卡片html的函数
 * @param project 项目信息，是config.projects中的一个元素构成。
 * @returns {string}  以字符串返回的html代码，由htmlBase.card构造而成。
 * @description 该函数接受项目信息，返回一个html代码，用来构造项目卡片。
 * 项目卡片的样式可以在css中修改。
 **/
async function createCard(project: any): Promise<string> {
    if (project.isOnGithub) {
        return htmlBase.card
            .replace(/PROJECT_NAME/g, project.name)
            .replace("DESCRIPTION", project.desc)
            .replace("MANUAL", project.manual)
            .replace(/POPOVERID/g, project.name + "-popover")
            .replace("PROJECT_WEBSITE", project.website)
            .replace("PROXIED_PROJECT_WEBSITE", getProxiedUrl(config.proxier, project.website))
            .replace("PROJECT_URL", project.url)
            .replace("PROXIED_PROJECT_URL", getProxiedUrl(config.githubProxier, project.url))
            .replace("DOWNLOAD_LINK", await getAssetsUrl(project.url, project.astIndex))
            .replace("PROXIED_DOWNLOAD_LINK", getProxiedUrl(config.githubProxier, await getAssetsUrl(project.url, project.astIndex)));
    } else {
        return htmlBase.card
            .replace(/PROJECT_NAME/g, project.name)
            .replace("DESCRIPTION", project.desc)
            .replace("MANUAL", project.manual)
            .replace(/POPOVERID/g, project.name + "-popover")
            .replace("PROJECT_WEBSITE", project.website)
            .replace("PROXIED_PROJECT_WEBSITE", getProxiedUrl(config.proxier, project.website))
            .replace("PROJECT_URL", project.url)
            .replace("PROXIED_PROJECT_URL", getProxiedUrl(config.proxier, project.url))
            .replace(`<a class="button" href="DOWNLOAD_LINK">下载最新版本</a>`, "<spaan>请前往官网</spaan>")
            .replace(`<a class="button" href="PROXIED_DOWNLOAD_LINK">通过代理下载最新版本</a><br>`, "<spaan>下载</spaan><br>");
    }

}

/** 用来构造主页html的函数
 * @returns {string}  以字符串返回的html代码，由htmlBase.page构造而成。
 * @description 该函数返回最终html代码。
 * 项目页面的样式可以在css中修改。
 **/
async function createPage(): Promise<string> {
    const cards = await Promise.all(config.projects.map(createCard));
    // try fetch css from github, if failed, use local css
    const finalcss: any = await fetch("https://raw.githubusercontent.com/AHA1GE/cf-worker-gi-cheese/master/src/index.css").then((res) => {
        if (res.status === 200) {
            // return css; //dev css
            return res.text();
        } else {
            console.log("Failed to fetch css from github, use hard-coded css");
            return css;
        }
    }).catch(() => {
        return css;
    });
    return htmlBase.page.replace("README_CONTENT", config.readmeContent).replace("CARDS", cards.join("")).replace("STYLESHEET", finalcss);
}

/** 用来构造服务器运行状态页面的函数
 * @returns {string}  以字符串返回的服务器运行状态。
 * @description 该函数返回服务器运行状态。
 **/
async function createServerPage(): Promise<string> {
    const serverAddress = `${config.server.tls ? "https" : "http"}://${config.server.address}:${config.server.port}`;
    let serverStatus = "正在获取状态";
    // Use page js to fetch server status, api is /server/status, every 60s
    return `<html>
        <head>
            <meta charset="utf-8">
            <title>私人服务器</title>
        </head>
        <body>
            <h1>私人服务器</h1>
            <h2>服务器状态</h2>
            <p id=status>${serverStatus}</p>
            <h2>服务器连接</h2>
            <p>${serverAddress}</p>
            <h2>服务器信息</h2>
            <p>协议：${config.server.tls ? "https" : "http"}</p>
            <p>地址：${config.server.address}</p>
            <p>端口：${config.server.port}</p>
            <h3>保留所有权利！</h2>
        </body>
        <script>
            async function updateStatus() {
                const res = await fetch("/server/status");
                const text = await res.text();
                document.getElementById("status").innerText = text;
            }
            setInterval(updateStatus, 60000);
            updateStatus();
        </script>
    </html>`;
}
async function serverStatus(serverAddress: string): Promise<string> {
    //fetch server status, timeout 5s, return "服务器正常运行" if status is 200, else return "服务器异常"
    async function fetchWithTimeout(resource: string, options: { timeout?: number } = {}) {
        const { timeout = 5000 } = options;

        const controller = new AbortController();
        const id = setTimeout(() => controller.abort(), timeout);

        const response = await fetch(resource, {
            ...options,
            signal: controller.signal
        });
        clearTimeout(id);

        return response;
    }
    try {
        const res = await fetchWithTimeout(serverAddress, { timeout: 5000 });
        if (res.status === 200) {
            return "服务器正常运行";
        } else {
            return "服务器异常";
        }
    } catch (error) {
        return "服务器异常";
    }
}

export default {
    async fetch(request: any, env: any, ctx: any) {
        //parse the request url
        const requestUrl = new URL(request.url);

        //switch case, if vising the root return the page; visiting robots.txt return the robotsTXT; visiting ads.txt return the adsTXT; else return 404
        switch (requestUrl.pathname.toLowerCase()) {
            case "/":
                return new Response(
                    await createPage(),
                    { headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "max-age=30" } }
                );
            case "/server":
                return new Response(
                    await createServerPage(),
                    { headers: { "Content-Type": "text/html", "Cache-Control": "max-age=30" } }
                );
            case "/server/status":
                return new Response(
                    await serverStatus(`${config.server.tls ? "https" : "http"}://${config.server.address}:${config.server.port}`),
                    { headers: { "Content-Type": "text/plain", "Cache-Control": "no-cache" } }
                );
            case "/robots.txt":
                return new Response( //use tobotsTXT from config, cache 1 year inmutable
                    config.robotsTXT,
                    { headers: { "Content-Type": "text/plain", "Cache-Control": "max-age=31536000, immutable" } }
                );
            case "/ads.txt":
                return new Response( //use adsTXT from config, cache no cache
                    config.adsTXT,
                    { headers: { "Content-Type": "text/plain", "Cache-Control": "no-cache" } }
                );
            case "/favicon.ico":
                return new Response( //use faviconAddress from config, cache 1 year inmutable
                    await fetch(config.faviconAddress + "favicon.ico").then((res) => res.blob()),
                    { headers: { "Content-Type": "image/x-icon", "Cache-Control": "max-age=31536000, immutable" } }
                );
            case "apple-touch-icon.png":
                return new Response( //use faviconAddress from config, cache 1 year inmutable
                    await fetch(config.faviconAddress + "apple-touch-icon.png").then((res) => res.blob()),
                    { headers: { "Content-Type": "image/png", "Cache-Control": "max-age=31536000, immutable" } }
                );
            default:
                return new Response(
                    "404 Not Found",
                    { status: 404, headers: { "Content-Type": "text/plain" } }
                );
        }
    },

};
