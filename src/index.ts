// https://github.com/AHA1GE/cf-worker-gi-cheese
import { request } from "@octokit/request";
import { css } from "./css.js"; //写死的css样式
const config = {
    proxier: "https://p.ahaigege.com/proxy/",
    projects: [
        {
            name: "Better-GI",
            url: "https://github.com/babalae/better-genshin-impact",
            website: "https://github.com/babalae/better-genshin-impact",
            desc: "基于计算机视觉的辅助工具，所有服务器及云游戏均可使用。",
        },
        {
            name: "Minty",
            url: "https://github.com/kindawindytoday/Minty-Releases",
            website: "https://discord.gg/kindawindytoday",
            desc: "免费！功能简略的作弊器，仅限国际服。",
        },
        {
            name: "Korepi",
            url: "https://github.com/Cotton-Buds/calculator",
            website: "https://korepi.com/zh/",
            desc: "免费&收费！功能丰富的作弊器，支持国际服；非高危功能支持国服。",
        },
        {
            name: "Akebi",
            url: "https://genshincheat.net/#linkk",
            website: "https://docs.bibika.fun/",
            desc: "收费！功能丰富的作弊器，支持国际服；国服有较高封号概率。",
        },
    ],
}
const htmlBase = {
    page: `
      <!DOCTYPE html>
      <html lang="zh-cn">
        <head>
        <meta charset="UTF-8">
        <meta name="description" content="原神辅助">
        <meta name="keywords" content="原神">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>原神辅助</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link rel="icon" href="/favicon.ico">
        <style>STYLESHEET</style>
        </head>
        <body>
          <header><h1>原神辅助</h1></header>
          <main>
            <p>本站收录了一些原神辅助工具。在网络条件允许的情况下请直接访问您的目的地，通过代理访问可能会出现各种意料之外的情况，敬请谅解！</p>
            <div class="cards-container">
                CARDS
            </div>
          </main>
          <footer><p>本站保留所有权利</p></footer>
          <script src=""></script>
        </body>
      </html>
    `,
    card: `<div class="card">
    <h2 >PROJECT_NAME</h2>
    <p class="info">DESCRIPTION</p>
    <a class="button" href="PROJECT_WEBSITE">访问官网或Discord</a>
    <a class="button" href="PROXIED_PROJECT_WEBSITE">通过代理访问官网或Discord</a><br>
    <a class="button" href="PROJECT_URL">访问下载页面</a>
    <a class="button" href="PROXIED_PROJECT_URL">通过代理访问下载页面</a><br>
    <a class="button" href="DOWNLOAD_LINK">下载最新版本</a>
    <a class="button" href="PROXIED_DOWNLOAD_LINK">通过代理下载最新版本</a><br>
    </div><br>`,
}
/** 用来获取下载地址的函数
 * @param url 项目地址，例如：“https://github.com/kindawindytoday/Minty-Releases”
 * @param astIndex Asset的索引，默认0，第一个
 * @returns {string}  以字符串返回的下载地址，例如：“https://github.com/kindawindytoday/Minty-Releases/releases/download/4.4.0.1/minty.zip”
 * @description 该函数接受项目地址，返回指定索引的asset的下载地址。
 **/
async function getAssetsUrl(url: string, astIndex: number = 0): Promise<string> {
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
function getProxiedUrl(url: string): string {
    return config.proxier + url;
}

/** 用来构造项目卡片html的函数
 * @param project 项目信息，是config.projects中的一个元素构成。
 * @returns {string}  以字符串返回的html代码，由htmlBase.card构造而成。
 * @description 该函数接受项目信息，返回一个html代码，用来构造项目卡片。
 * 项目卡片的样式可以在css中修改。
 **/
async function createCard(project: any): Promise<string> {
    return htmlBase.card
        .replace("PROJECT_NAME", project.name)
        .replace("DESCRIPTION", project.desc)
        .replace("PROJECT_WEBSITE", project.website)
        .replace("PROXIED_PROJECT_WEBSITE", getProxiedUrl(project.website))
        .replace("PROJECT_URL", project.url)
        .replace("PROXIED_PROJECT_URL", getProxiedUrl(project.url))
        .replace("DOWNLOAD_LINK", await getAssetsUrl(project.url))
        .replace("PROXIED_DOWNLOAD_LINK", getProxiedUrl(await getAssetsUrl(project.url)));
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
            return res.text();
        } else {
            console.log("Failed to fetch css from github, use hard-coded css");
            return css;
        }
    }).catch(() => {
        return css;
    });
    return htmlBase.page.replace("CARDS", cards.join("")).replace("STYLESHEET", finalcss);
}

export default {
    async fetch(request: any, env: any, ctx: any) {
        const requestUrl = new URL(request.url);

        return new Response(
            await createPage(),
            { headers: { "Content-Type": "text/html" } }
        );
    },

};
