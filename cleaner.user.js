// ==UserScript==
// @name        Bing Search Cleaner
// @namespace   http://tampermonkey.net/
// @version     0.1
// @description Automatically redirect Bing search to a clean URL with only the 'q' parameter to remove ads
// @author      AsagiYuumoya
// @match       https://www.bing.com/search?*
// @grant       none
// @run-at      document-start
// ==/UserScript==

(function() {
    'use strict';
    const url = new URL(window.location.href);
    const q = url.searchParams.get('q');
    if (q) {
        let cleanUrl;
        if (url.hostname === 'www.bing.com') {
            cleanUrl = `https://cn.bing.com/search?q=${encodeURIComponent(q)}&setlang=zh-CN`;
        }
        else if (url.hostname === 'cn.bing.com') {
            cleanUrl = `https://cn.bing.com/search?q=${encodeURIComponent(q)}&setlang=zh-CN`;
        }
        // 如果当前URL与目标URL不同，则进行重定向
        if (cleanUrl && window.location.href !== cleanUrl) {
            window.location.replace(cleanUrl);
        }
    }
})();
