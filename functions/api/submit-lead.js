export async function onRequestPost(context) {
    const { request } = context;
    
    try {
        const body = await request.json();
        
        // 1. 简单的参数校验
        if (!body.contact || !body.name) {
            return new Response(JSON.stringify({ msg: "请填写姓名和联系方式" }), { status: 400 });
        }

        // 2. 构造通知消息 (以飞书为例，可根据需要调整模板)
        const payload = {
            msg_type: "text",
            content: {
                text: `⚽ [新球赛咨询]\n客户姓名: ${body.name}\n联系方式: ${body.contact}\n意向套餐: ${body.package}\n用户备注: ${body.note || '无'}\n时间: ${new Date().toLocaleString()}`
            }
        };

        // 3. 发送到 Webhook (此处直接使用 site.config.js 里的地址，或者通过 env.WEBHOOK 注入)
        // 注意：在 Functions 中，如果想保护地址，建议在 CF 后台设置环境变量
        const WEBHOOK_URL = "https://open.feishu.cn/open-home/vic/..."; // 填入你的真实地址

        const response = await fetch(WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            return new Response(JSON.stringify({ msg: "提交成功！分析师将尽快联系您。" }), {
                status: 200,
                headers: { "Content-Type": "application/json" }
            });
        } else {
            throw new Error("Webhook Error");
        }

    } catch (err) {
        return new Response(JSON.stringify({ msg: "服务器错误，请稍后再试" }), { status: 500 });
    }
}