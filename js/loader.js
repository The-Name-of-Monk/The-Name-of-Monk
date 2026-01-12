// loader.js 内容
document.addEventListener('DOMContentLoaded', () => {
    const anim = lottie.loadAnimation({
        container: document.getElementById('lottie-box'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'images/loadingscene.json' // path
    });

    window.addEventListener('load', () => {
        const overlay = document.getElementById('loading-overlay');
        setTimeout(() => {
            overlay.style.opacity = '0';
            setTimeout(() => {
                overlay.style.display = 'none';
                anim.destroy();
            }, 800);
        }, 2000);
    });
});