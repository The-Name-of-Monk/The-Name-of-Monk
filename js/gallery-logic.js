/* js/gallery-logic.js - Single Image, Zoom, Language Toggle, Progressive Text */
document.addEventListener('DOMContentLoaded', function() {
    // 1. 获取 URL 参数
    const urlParams = new URLSearchParams(window.location.search);
    const currentId = parseInt(urlParams.get('id')) || 1;

    // 2. 查找数据 (使用新的 galleryData 数组结构)
    // 如果 data.js 没加载，这行会报错，请确保 html 里引入了 data.js
    const item = typeof galleryData !== 'undefined' ? galleryData.find(i => i.id === currentId) : null;

    // 状态变量
    let currentLangLevel = 1; // 1 = Standard
    let currentStep = 1;      // 1 = Show 1st paragraph
    let scale = 1;            // Zoom scale

    // DOM Elements
    const btnDecrease = document.getElementById('btnDecrease');
    const btnIncrease = document.getElementById('btnIncrease');
    const langStatus = document.getElementById('langStatus');
    const toggleBtn = document.getElementById('progressiveToggle');
    const imgContainer = document.querySelector('.gallery-image-frame');
    const imgElement = document.getElementById('itemImageArea');

    if (item) {
        // --- A. 填充基础内容 (图片与标题) ---
        if(document.getElementById('cardTitle')) document.getElementById('cardTitle').innerText = item.title;
        
        // [修复核心] 设置图片路径
        if(imgElement) {
            imgElement.src = item.image; 
            imgElement.alt = item.title;
        }

        // --- B. 填充表格元数据 ---
        setText('fullName', item.title);
        setText('creator', item.creator);
        setText('year', item.year);
        setText('itemType', item.type);
        setText('origin', item.origin);
        setText('source', item.source);
        
        const linkElem = document.getElementById('externalLink');
        if(linkElem) {
            if(item.link) {
                linkElem.href = item.link;
                linkElem.style.display = 'inline';
            } else {
                linkElem.style.display = 'none';
            }
        }

        // 填充 Narrative 信息
        if(document.getElementById('narrativeArea')) {
            const narrativeHTML = `
                <span class="text-dark fw-bold">Evolution:</span> ${item.evolution || "-"} 
                <span class="mx-2">|</span> 
                <span class="text-dark fw-bold">Mental:</span> ${item.mental || "-"}
            `;
            document.getElementById('narrativeArea').innerHTML = narrativeHTML;
        }

        // --- C. 初始化文本显示 (默认 Standard) ---
        updateDescriptionText();
        updateLangButtons();

        // --- D. 翻页按钮逻辑 ---
        const totalItems = typeof galleryData !== 'undefined' ? galleryData.length : 16;
        const prevId = currentId === 1 ? totalItems : currentId - 1;
        const nextId = currentId === totalItems ? 1 : currentId + 1;

        const prevBtn = document.getElementById('previousButton');
        const nextBtn = document.getElementById('nextButton');
        const navText = document.getElementById('narrativeItem');

        if(prevBtn) prevBtn.href = `gallery.html?id=${prevId}`;
        if(nextBtn) nextBtn.href = `gallery.html?id=${nextId}`;
        if(navText) navText.innerText = `ITEM ${currentId} / ${totalItems}`;

    } else {
        if(document.getElementById('cardTitle')) document.getElementById('cardTitle').innerText = "Item Not Found";
    }

    // --- E. 图片缩放逻辑 (Zoom) ---
    if(imgContainer && imgElement) {
        const scaleStep = 0.1;
        const maxScale = 5.0;
        const minScale = 1.0;

        imgContainer.addEventListener('wheel', function(e) {
            e.preventDefault(); 
            
            if (e.deltaY < 0) scale += scaleStep; // Scroll up -> Zoom in
            else scale -= scaleStep; // Scroll down -> Zoom out
            
            scale = Math.min(Math.max(minScale, scale), maxScale);
            imgElement.style.transform = `scale(${scale})`;
        });

        // 双击还原
        imgContainer.addEventListener('dblclick', function() {
            scale = 1;
            imgElement.style.transform = `scale(1)`;
        });
    }

    // --- F. 语言难度切换逻辑 ---
    if (btnDecrease) {
        btnDecrease.addEventListener('click', () => {
            if (currentLangLevel > 0) { currentLangLevel--; updateDescriptionText(); updateLangButtons(); }
        });
    }
    if (btnIncrease) {
        btnIncrease.addEventListener('click', () => {
            if (currentLangLevel < 2) { currentLangLevel++; updateDescriptionText(); updateLangButtons(); }
        });
    }

    // --- G. Show More 三段式逻辑 ---
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            if (toggleBtn.innerText === "Show More") {
                currentStep++;
                const nextContainer = document.getElementById(`containerLevel${currentStep}`);
                if (nextContainer) {
                    nextContainer.style.display = 'block';
                    nextContainer.style.opacity = 0;
                    setTimeout(() => nextContainer.style.opacity = 1, 50);
                }
                if (currentStep === 3) toggleBtn.innerText = "Show Less";
            } else {
                const currentContainer = document.getElementById(`containerLevel${currentStep}`);
                if (currentContainer) currentContainer.style.display = 'none';
                currentStep--;
                if (currentStep === 1) toggleBtn.innerText = "Show More";
            }
        });
    }

    // 辅助函数：更新描述文本
    function updateDescriptionText() {
        if (!item) return;
        let sText = "", mText = "", lText = "";
        
        if (currentLangLevel === 0) { // Simple
            sText = (item.simple && item.simple.short) ? item.simple.short : item.shortDesc;
            mText = (item.simple && item.simple.medium) ? item.simple.medium : item.mediumDesc;
            lText = (item.simple && item.simple.long) ? item.simple.long : item.longDesc;
            if(langStatus) { 
                langStatus.innerText = "Mode: Simplified Language"; 
                langStatus.className = "small text-uppercase fw-bold text-success mb-2 ls-1 fs-07"; 
            }
        } else if (currentLangLevel === 2) { // Complex
            sText = (item.complex && item.complex.short) ? item.complex.short : item.shortDesc;
            mText = (item.complex && item.complex.medium) ? item.complex.medium : item.mediumDesc;
            lText = (item.complex && item.complex.long) ? item.complex.long : item.longDesc;
            if(langStatus) { 
                langStatus.innerText = "Mode: Academic Analysis"; 
                langStatus.className = "small text-uppercase fw-bold text-danger mb-2 ls-1 fs-07"; 
            }
        } else { // Standard
            sText = item.shortDesc; 
            mText = item.mediumDesc; 
            lText = item.longDesc;
            if(langStatus) { 
                langStatus.innerText = "Mode: Standard Description"; 
                langStatus.className = "small text-uppercase fw-bold text-muted mb-2 ls-1 fs-07"; 
            }
        }
        setText('textLevel1', sText); 
        setText('textLevel2', mText); 
        setText('textLevel3', lText);
    }

    function updateLangButtons() {
        if (currentLangLevel === 0) { btnDecrease.disabled = true; btnIncrease.disabled = false; }
        else if (currentLangLevel === 2) { btnDecrease.disabled = false; btnIncrease.disabled = true; }
        else { btnDecrease.disabled = false; btnIncrease.disabled = false; }
    }
});

// 辅助函数：安全设置文本
function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.innerText = text || "-";
}