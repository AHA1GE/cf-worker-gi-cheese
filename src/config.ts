export const config = {
    robotsTXT: ``,
    adsTXT: `google.com, pub-5526526482489599, DIRECT, f08c47fec0942fa0`,
    proxier: "https://p.ahaigege.com/proxy/",
    githubProxier: "https://mirror.ghproxy.com/",
    faviconAddress: `https://genshin.hoyoverse.com/`,
    readmeContent: `
                <p>请关注留言板获取最新的消息</p>
                <p>本站提供了一些Windows端的原神工具的介绍和使用教程。本站不对任何工具的安全性和使用后果负责。</p>
                <p>在网络条件允许的情况下请直接访问，通过代理访问可能会出现各种意料之外的情况，敬请谅解！</p>
                <p>如果遇到无法访问的情况，请寻求网络技术人员的帮助！</p>
                `,
    projects: [
        // {
        //     isOnGithub: true, //下载地址是否在github上
        //     name: "项目名字",
        //     url: "https://github.com/example/example", //项目的github repo地址或者下载页面的地址
        //     astIndex: 0, //项目的github release asset index
        //     website: "https://example.com/", //项目的官网或者discord地址
        //     desc: "免费！简介。",
        //     manual: "简单使用教程", 
        // },
        {
            isOnGithub: true,
            name: "Snap-Hutao",
            url: "https://github.com/DGP-Studio/Snap.Hutao",
            astIndex: 1,
            website: "https://hut.ao/",
            desc: "免费！开源的工具箱程序，所有服务器及云游戏均可使用。",
            manual: "胡桃工具箱是一款以 MIT 协议开源的原神工具箱，专为现代化 Windows 平台设计，旨在改善桌面端玩家的游戏体验。它不对游戏客户端进行任何破坏性修改以确保工具箱的安全性",
        },
        {
            isOnGithub: true,
            name: "Better-GI",
            url: "https://github.com/babalae/better-genshin-impact",
            astIndex: 0,
            website: "https://bgi.huiyadan.com/",
            desc: "免费！基于计算机视觉的辅助工具，所有服务器及云游戏均可使用。",
            manual: "首先前往Github下载最新版本，然后使用管理员权限启动你下载的程序。程序启动后请根据Github上的ReadMe所展示的教程操作各个功能。",
        },
        {
            isOnGithub: true,
            name: "Minty",
            url: "https://github.com/kindawindytoday/Minty-Releases",
            astIndex: 0,
            website: "https://discord.gg/kindawindytoday",
            desc: "免费！功能简略的辅助工具，仅限国际服。",
            manual: "首先前往Github下载最新版本，然后使用管理员权限启动你下载的程序。程序启动后请在弹出的文件选择框内选择你的游戏主程序，注意不要选择启动器程序。Minty会启动游戏，在开门后请按照菜单内的信息开启相应功能。",
        },
        {
            isOnGithub: true,
            name: "Korepi",
            url: "https://github.com/Cotton-Buds/calculator",
            astIndex: 0,
            website: "https://korepi.com/zh/",
            desc: "免费！功能丰富的辅助工具，支持国际服。付费获取更多功能和国服支持！",
            manual: "首先前往官方Discord，获取免费使用密钥。前往官方Discord内的链接下载最新版。使用管理员权限启动你下载的程序。程序启动后会产生你的HWID。将你的HWID发送给官方Discord内的机器人，然后你会收到一个密钥文件。将密钥文件复制到程序所在的目录即可使用。",
        },
        {
            isOnGithub: false,
            name: "Akebi",
            // url: "https://mega.nz/file/xKtFBaaa#Rpj-HUs9Q6Sy2JHLuHoLYPQdDQbxHXkFZpoefxD45ec",
            url: "https://genshincheat.net/#linkk",
            astIndex: 0,
            website: "https://discord.gg/akebi",
            desc: "收费！功能丰富的辅助工具，支持国际服和国服。",
            manual: "前往官方链接下载最新版。然后在官方Sellix或代购人员处购买密钥。启动程序并输入密钥，选择游戏的主程序，注意不要选择启动器程序，然后在开门后请按照菜单内的信息开启相应功能。",
        },
        {
            isOnGithub: true, //下载地址是否在github上
            name: "KCN-GenshinServer",
            url: "https://github.com/JDDKCN/KCN-GenshinServer/", //项目的github repo地址或者下载页面的地址
            astIndex: 0, //项目的github release asset index
            website: "https://github.com/JDDKCN/KCN-GenshinServer/", //项目的官网或者discord地址
            desc: "基于Grasscutter制作的一键GUI多功能服务端。",
            manual: "下载并解压客户端，启动。",
        },
        {
            isOnGithub: true, //下载地址是否在github上
            name: "Cultivation",
            url: "https://github.com/Grasscutters/Cultivation/", //项目的github repo地址或者下载页面的地址
            astIndex: 3, //项目的github release asset index
            website: "https://grasscutter.io/", //项目的官网或者discord地址
            desc: "游戏的启动器，内置Grasscutter。",
            manual: "下载并安装Java17，下载并安装MongoDB，下载并安装Cultivation，启动。",
        },
        {
            isOnGithub: false, //下载地址是否在github上
            name: "ReversedRoom私服",
            url: "https://git.xeondev.com/reversedrooms/", //项目的github repo地址或者下载页面的地址
            astIndex: 0, //项目的github release asset index
            website: "https://discord.gg/reversedrooms", //项目的官网或者discord地址
            desc: "由BladeXeon制作的私服。通常拥有最新的内容，但游戏特性的可用性无保障。",
            manual: "打开下载页面，寻找正确的repo，通常最新的repo会以当前版本的热门角色命名。下载后按照Readme进行安装或编译。同时需要下载正确的客户端。完成下载和安装后按照Readme的指示启动游戏。",
        },
        {
            isOnGithub: false,
            name: "辅助吧",
            url: "https://www.fuzhu86.com/",
            astIndex: 0,
            website: "https://www.fuzhu86.com/",
            desc: "免费！站主收集了各种免费辅助。",
            manual: "打开，爽用！",
        },
        {
            isOnGithub: false, //下载地址是否在github上
            name: "我的私服",
            url: "https://vnology.synology.me:5001/sharing/pYnmaMcCc", //项目的github repo地址或者下载页面的地址
            astIndex: 1, //项目的github release asset index
            website: "server", //项目的官网或者discord地址
            desc: "私人服务器。",
            manual: "下载并解压客户端，使用非官方启动器设置服务器地址并启动游戏。",
        },
    ],

    serverStatusTimeout: 2, //seconds

    servers: [
        {
            id: 0,
            opTime: { always: false, start: 6, end: 23 }, // {always: true, start: 0, end: 24
            name: "Grasscutter服务器",
            manual: "仅在北京时间06:00-23:00运行。版本4.0，支持国际服和国服。请下载4.0客户端，使用第三方启动器设置服务器地址并启动游戏。下面的链接提供了中文语音的客户端。使用帐号test和任意密码登陆。",
            domainName: "gayshit.aha1.top",
            port: { allocation: "static", value: 8443 }, // {allocation: "dynamic", value: 0}
            protocol: "https",
            statusUrl: "/server/status/", // When generating the card, the in-page js use this url to fetch the status of the server.
            statusFetchTarget: "https://gayshit.aha1.top:8443/", // When worker recieve the request from client, it fetch this url to get the status of the server.
            statusFetchExpect: "Grasscutter",
            downloadLinks: [
                { url: 'https://pan.baidu.com/s/1r7sWxasKZRJYqixGRRf8BQ?pwd=gays', name: "百度网盘", desc: "我的很大你忍一下。提取码：gays" },
                { url: 'https://vnology.synology.me:5001/d/s/xvXclBjNPkWSeDt2FZ4z5j3GYql8rtAG/2FyQ3GD4ny6Xuk97V0c4Cchd1_m84rUq-LbCAJaGOXgs', name: "群晖网盘", desc: "通过动态DNS访问NAS，需要ipv6。" },
                { url: 'https://vno.aha1.top/d/s/xvXclBjNPkWSeDt2FZ4z5j3GYql8rtAG/2FyQ3GD4ny6Xuk97V0c4Cchd1_m84rUq-LbCAJaGOXgs', name: "群晖网盘", desc: "通过赛博佛祖的隧道访问NAS，慢。" },
            ]
        },
        {
            id: 1,
            opTime: { always: false, start: 6, end: 23 },
            name: "Minecraft Bedrock服务器",
            manual: "内网服务器，仅在北京时间06:00-23:00运行。原版基岩服务器，无插件。生存模式。请在discord上联系我获取服务器信息与连接方法。",
            domainName: "0.0.0.0",
            port: { allocation: "static", value: 19132 },
            protocol: "tcp",
            statusUrl: "/server/status/",
            statusFetchTarget: "https://gayshit.aha1.top:8443/",
            statusFetchExpect: "MinecraftBedrock",
            downloadLinks: [
                { url: 'https://www.minecraft.net/about-minecraft', name: "官方启动器", desc: "原汁原味，好！" },
                { url: 'https://apps.apple.com/us/app/minecraft/id479516143', name: "iOS APP Store", desc: "原汁原味，好！" },
                { url: 'https://play.google.com/store/apps/details?id=com.mojang.minecraftpe', name: "Android Google Play", desc: "原汁原味，好！" },
            ]
        },
        {
            id: 2,
            opTime: { always: true, start: 0, end: 24 },
            name: "Minecraft Java服务器",
            manual: "24/7 原版服务器，无插件。生存模式。已开启正版验证，需要使用微软/Mojang账号登录才能进入服务器。如有插件建议或请求，请在留言板提出。",
            domainName: "server.aha1.top",
            port: { allocation: "dynamic", value: 0 },
            portDweet: "https://dweet.io/get/latest/dweet/for/d848eca0-7f50-4450-a6cd-bdb1ec5f3f7e",
            protocol: "tcp",
            statusUrl: "/server/status/",
            statusFetchTarget: null, // no health check deployed
            statusFetchExpect: "MinecraftJava",
            downloadLinks: [
                { url: 'https://www.minecraft.net/about-minecraft', name: "官方启动器", desc: "原汁原味，好！" },
                { url: 'https://hmcl.huangyuhui.net/', name: "HMCL", desc: "免费，好！" },
                { url: 'https://play.google.com/store/apps/details?id=net.kdt.pojavlaunch', name: "pojavLauncher", desc: "在手机上运行Java版Minecraft，好！" },
            ]
        },
    ]
}