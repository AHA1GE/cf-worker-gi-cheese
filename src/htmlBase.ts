export const htmlBase = {
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
            <div class="readme">
                <h2>说明</h2>
                README_CONTENT
                <p><a href="https://mb.aha1.top/">留言板</a></p>
            </div>
            <div class="cards-container">
                CARDS
            </div>
          </main>
          <footer><p>本站保留所有权利</p></footer>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5526526482489599" crossorigin="anonymous"></script>
        </body>
      </html>
    `,
  card: `
    <div class="card">
      <h2 >PROJECT_NAME</h2>
      <p class="info">DESCRIPTION</p>
      <p class="manual">使用教程：MANUAL</p>
      <button class="button" popovertarget="POPOVERID">查看链接</button>
      <div class="popover-dialog" id="POPOVERID" popover>
        <div class="links-popover">
          <h3 >PROJECT_NAME</h2>
          <div class="links-container">
            <a class="button" href="PROJECT_WEBSITE">访问官网或Discord</a>
            <a class="button" href="PROXIED_PROJECT_WEBSITE">通过代理访问官网或Discord</a><br>
            <a class="button" href="PROJECT_URL">访问下载页面</a>
            <a class="button" href="PROXIED_PROJECT_URL">通过代理访问下载页面</a><br>
            <a class="button" href="DOWNLOAD_LINK">下载最新版本</a>
            <a class="button" href="PROXIED_DOWNLOAD_LINK">通过代理下载最新版本</a><br>
          </div>
        </div>
      </div>
    </div><br>
  `,
  serversPage: `
    <!DOCTYPE html>
      <html lang="zh-cn">
        <head>
        <meta charset="UTF-8">
        <meta name="description" content="私人服务器">
        <meta name="keywords" content="原神">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>私人服务器</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link rel="icon" href="/favicon.ico">
        <style>STYLESHEET</style>
        </head>
        <body>
          <header><h1>私人服务器</h1></header>
          <main>
            <div class="readme">
                <h2>说明</h2>
                该页面列出了一些私人服务器。点击 “游玩该服务器” 按钮查看服务器信息。
            </div>
            <div class="cards-container">
                CARDS
            </div>
          </main>
          <footer><p>本站保留所有权利</p></footer>
          <!--script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5526526482489599" crossorigin="anonymous"></script--!>
        </body>
      </html>
  `,
  serverCard: `
    <div class="card">
      <h2>SERVER_NAME</h2>
      <p class="info" >服务器状态：<span id="SERVER_STATUS_ELEMENT_ID">正在获取状态...</span></p>
      <p class="manual">服务器信息：MANUAL</p>
      <button class="button" popovertarget="POPOVERID">游玩该服务器</button>
      <div class="popover-dialog" id="POPOVERID" popover>
        <div class="server-popover">
          <h3>SERVER_NAME</h3>
          <div class="info-container">
          <strong>连接信息</strong><br>
            <span>地址：SERVER_ADDRESS</span><br>
            <span>协议：SERVER_PROTOCOL</span><br>
            <span>域名：SERVER_DOMAINNAME</span><br>
            <span>端口：SERVER_PORT</span><br>
          </div>
          <br>
          <div class="info-container">
            <strong>下载地址</strong><br>
            <a href="SERVER_DOWNLOAD_LINK_0" target="_blank" rel="noreferrer">点击前往下载页面</a><br>
            <a href="SERVER_DOWNLOAD_LINK_1" target="_blank" rel="noreferrer">点击前往备用下载页面</a>
          </div>
        </div>
      </div>
      <script>
        async function JS_FUNC_NAME_updateStatus() {
          document.getElementById("SERVER_STATUS_ELEMENT_ID").innerText = "正在获取状态...";
          document.getElementById("SERVER_STATUS_ELEMENT_ID").style.color = "black";
          document.getElementById("SERVER_STATUS_ELEMENT_ID").style.backgroundColor = "yellow";
          const beijingTime = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Shanghai" }));
          const hours = beijingTime.getHours();
          if (hours < 6 || hours > 23) {
            document.getElementById("SERVER_STATUS_ELEMENT_ID").innerText = "服务器仅在北京时间6-23点运行";
            document.getElementById("SERVER_STATUS_ELEMENT_ID").style.color = "black";
            document.getElementById("SERVER_STATUS_ELEMENT_ID").style.backgroundColor = "yellow";
          } else {
            const res = await fetch("SERVER_STATUS_URL");
            const text = await res.text();
            document.getElementById("SERVER_STATUS_ELEMENT_ID").innerText = text;
            document.getElementById("SERVER_STATUS_ELEMENT_ID").style.color = "white";
            document.getElementById("SERVER_STATUS_ELEMENT_ID").style.backgroundColor = text === "正常运行" ? "green" : "red";
          }
        }
        JS_FUNC_NAME_updateStatus();
        setInterval(JS_FUNC_NAME_updateStatus, 60000);
      </script>
    </div><br>
  `,
};