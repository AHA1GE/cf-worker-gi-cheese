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
};