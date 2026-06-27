document.addEventListener('DOMContentLoaded', () => {
    // 1. 初始化页面内容
    document.getElementById('nav-site-name').innerText = SiteConfig.settings.siteName;
    document.getElementById('hero-title').innerText = SiteConfig.hero.title;
    document.getElementById('hero-subtitle').innerText = SiteConfig.hero.subtitle;
    document.getElementById('cta-main').innerText = SiteConfig.hero.ctaMain;
    document.getElementById('cta-sub').innerText = SiteConfig.hero.ctaSub;
    document.getElementById('footer-name').innerText = SiteConfig.settings.siteName;
    document.getElementById('footer-year').innerText = new Date().getFullYear();

    // 2. 渲染套餐
    const packageContainer = document.getElementById('package-container');
    const packageSelect = document.getElementById('package_select');
    
    SiteConfig.packages.forEach(pkg => {
        // 渲染卡片
        const card = document.createElement('div');
        card.className = `relative p-8 rounded-3xl border-2 transition hover:shadow-2xl ${pkg.isRecommended ? 'border-emerald-500 bg-white scale-105 z-10' : 'border-gray-100 bg-white'}`;
        card.innerHTML = `
            ${pkg.isRecommended ? '<span class="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-bold">最受欢迎</span>' : ''}
            <div class="text-gray-500 font-bold mb-2">${pkg.tag}</div>
            <h3 class="text-2xl font-bold mb-1">${pkg.name}</h3>
            <div class="text-emerald-600 font-bold text-3xl mb-4">¥${pkg.price} <span class="text-sm text-gray-400 font-normal">/ ${pkg.count}</span></div>
            <ul class="space-y-3 mb-8 text-sm">
                ${pkg.features.map(f => `<li class="flex items-center">✅ <span class="ml-2">${f}</span></li>`).join('')}
            </ul>
            <a href="#contact" onclick="selectPkg('${pkg.id}')" class="block text-center py-3 rounded-xl font-bold ${pkg.isRecommended ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} transition">立即订购</a>
        `;
        packageContainer.appendChild(card);

        // 渲染下拉框
        const opt = document.createElement('option');
        opt.value = pkg.name;
        opt.innerText = pkg.name;
        packageSelect.appendChild(opt);
    });

    // 3. 渲染 FAQ
    const faqContainer = document.getElementById('faq-container');
    SiteConfig.faq.forEach((item, index) => {
        const detail = document.createElement('details');
        detail.className = "group bg-gray-50 rounded-xl p-4 cursor-pointer";
        detail.innerHTML = `
            <summary class="font-bold flex justify-between items-center list-none">
                ${item.q}
                <span class="transition group-open:rotate-180">▼</span>
            </summary>
            <p class="mt-4 text-gray-600 leading-relaxed">${item.a}</p>
        `;
        faqContainer.appendChild(detail);
    });

    // 4. 表单提交
    const form = document.getElementById('leadForm');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = document.getElementById('submitBtn');
        btn.disabled = true;
        btn.innerText = "提交中...";

        const formData = {
            name: document.getElementById('name').value,
            contact: document.getElementById('contact_info').value,
            package: document.getElementById('package_select').value,
            note: document.getElementById('note').value
        };

        try {
            const resp = await fetch('/api/submit-lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const res = await resp.json();
            alert(res.msg);
            if (resp.ok) form.reset();
        } catch (err) {
            alert("提交失败，请检查网络或稍后再试");
        } finally {
            btn.disabled = false;
            btn.innerText = "提交申请";
        }
    });
});

// 选择套餐跳转
window.selectPkg = (id) => {
    const pkg = SiteConfig.packages.find(p => p.id === id);
    if (pkg) document.getElementById('package_select').value = pkg.name;
};