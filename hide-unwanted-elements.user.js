// ==UserScript==
// @name         flashscore隐藏无关元素
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  使用 CSS 注入 + MutationObserver 实时隐藏，彻底消除闪现
// @author       您
// @match        https://www.flashscore.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    // 要隐藏的元素选择器（精确匹配）
    const HIDE_SELECTORS = [
        'header.header',
        'nav.menuTop.menuTop--motorsport-auto-racing',
        'div.container__overlay'
    ];

    // 转换为 CSS 规则
    const cssRules = HIDE_SELECTORS.map(selector => {
        return `${selector} { display: none !important; }`;
    }).join('\n');

    // 【第一道防线】立即注入 CSS，阻止渲染
    const style = document.createElement('style');
    style.type = 'text/css';
    style.id = 'stealth-hide-style';  // 便于识别
    style.textContent = cssRules;

    // 尽早插入 head
    if (document.head) {
        document.head.prepend(style); // prepend 优先级更高
    } else {
        // 如果 head 还没创建，监听 document.head
        document.addEventListener('DOMContentLoaded', () => {
            document.head.prepend(style);
        });
    }

    // 【第二道防线】MutationObserver 监听所有新增元素
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType !== 1) return; // 只处理元素

                HIDE_SELECTORS.forEach(selector => {
                    // 检查当前节点是否匹配
                    if (node.matches && node.matches(selector)) {
                        node.style.display = 'none !important';
                    }
                    // 检查子元素
                    const matches = node.querySelectorAll(selector);
                    matches.forEach(el => {
                        el.style.display = 'none !important';
                    });
                });
            });
        });
    });

    // 开始监听整个页面的 DOM 添加
    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });

    // 【可选】如果页面有 Shadow DOM 或复杂结构，可以定期扫描
    setInterval(() => {
        HIDE_SELECTORS.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => {
                el.style.display = 'none !important';
            });
        });
    }, 500); // 每 500ms 扫描一次，确保万无一失（性能影响极小）

})();