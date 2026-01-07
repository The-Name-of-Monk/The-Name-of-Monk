/**
 * theme-manager.js
 * 处理主题切换、本地存储记忆、以及通用的 UI 交互（回到顶部、动画）
 */

(function() {
    // ===============================================
    // 1. 立即执行：恢复已保存的主题 (防止闪烁)
    // ===============================================
    // 注意：这段代码在文件加载时就会运行。
    // 如果把这个 JS 放在 <head> 里效果最好；如果放在 </body> 前，可能会有轻微闪烁。
    
    const savedPath = localStorage.getItem('site_theme_path');
    const savedName = localStorage.getItem('site_theme_name');
    const themeLink = document.getElementById('theme-css');

    // 如果有保存的主题，且与当前默认不同，立即应用
    if (savedPath && savedName && themeLink) {
        themeLink.href = savedPath;
        document.body.setAttribute('data-theme', savedName);
    }

    // ===============================================
    // 2. 定义全局切换函数 (供 HTML onclick 调用)
    // ===============================================
    window.setTheme = function(cssFile, themeName) {
        // 1. 切换 CSS 文件
        if (themeLink) {
            themeLink.href = cssFile;
        }
        // 2. 设置 Body 属性 (用于 CSS 选择器)
        document.body.setAttribute('data-theme', themeName);
        
        // 3. 保存到浏览器缓存
        localStorage.setItem('site_theme_path', cssFile);
        localStorage.setItem('site_theme_name', themeName);
    };

    // ===============================================
    // 3. DOM 加载完成后的 UI 逻辑
    // ===============================================
    document.addEventListener("DOMContentLoaded", function() {
        
        // --- A. 回到顶部按钮逻辑 ---
        const mybutton = document.getElementById("btn-back-to-top");
        if (mybutton) {
            window.onscroll = function () {
                if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                    mybutton.style.display = "flex";
                } else {
                    mybutton.style.display = "none";
                }
            };
            mybutton.addEventListener("click", () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        // --- B. 滚动动画逻辑 (Intersection Observer) ---
        const animElements = document.querySelectorAll('.anim-element');
        if (animElements.length > 0) {
            const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    // 进入视野添加类，移出视野移除类 (可根据需要去掉 else 部分)
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    } else {
                        entry.target.classList.remove('is-visible');
                    }
                });
            }, observerOptions);
            
            animElements.forEach((el) => observer.observe(el));
        }
    });

})();