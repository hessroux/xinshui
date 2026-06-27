const SiteConfig = {
    settings: {
        siteName: "极准足球分析",
        siteTitle: "极准足球分析 - 专业数据驱动的赛事研判",
        adminPassword: "admin888", // 访问admin.html的密码
        webhookUrl: "https://open.feishu.cn/open-home/vic/...", // 替换为你的机器人Webhook
        primaryColor: "#059669", // 足球绿
    },
    hero: {
        title: "用数据拆解球赛，用专业驱动盈利",
        subtitle: "前职业机构分析师领衔，深耕五大联赛。每日精选高胜率重心，拒绝盲目下注。",
        ctaMain: "查看今日套餐",
        ctaSub: "了解服务流程"
    },
    // 4档次付套餐
    packages: [
        {
            id: "trial",
            name: "单场体验档",
            count: "1场核心推荐",
            price: "98",
            perPrice: "98/场",
            expiry: "24小时有效",
            features: ["精选单场重心", "亚指/大小分析", "伤停情报复核", "不中免费补单一次"],
            tag: "低门槛试用",
            isRecommended: false
        },
        {
            id: "basic",
            name: "三场进阶档",
            count: "3场核心推荐",
            price: "258",
            perPrice: "86/场",
            expiry: "3天内有效",
            features: ["包含单场所有权益", "早盘+临场走地建议", "独家大数据模型参考", "专属客服一对一推送"],
            tag: "高性价比",
            isRecommended: false
        },
        {
            id: "pro",
            name: "七场专业档",
            count: "7场核心推荐",
            price: "498",
            perPrice: "71/场",
            expiry: "7天内有效",
            features: ["最高优先级推荐", "深度赛事内幕简报", "全联赛覆盖分析", "不中全额补单直到盈利"],
            tag: "胜率最高",
            isRecommended: true
        },
        {
            id: "custom",
            name: "大户定制档",
            count: "按需定制次数",
            price: "面议",
            perPrice: "专属定价",
            expiry: "长期有效",
            features: ["职业级资金管理建议", "24h电话支持", "定制回血方案", "包赔条款保障"],
            tag: "私享服务",
            isRecommended: false
        }
    ],
    faq: [
        { q: "推荐内容什么时候发送？", a: "通常在开赛前2-4小时通过微信发送，确保赔率处于稳定区间。" },
        { q: "如果没有命中怎么办？", a: "我们实行补单制度：单场未命中，免费补偿下一场同级别重心；专业档确保周期内整体盈利。" },
        { q: "支持哪些支付方式？", a: "提交咨询后，我们的分析师会联系您，支持微信、支付宝等主流支付。" },
        { q: "你们的胜率真的有那么高吗？", a: "我们不承诺100%胜率，但基于大数据和情报网，长期胜率稳定在75%-82%之间。" }
    ]
};