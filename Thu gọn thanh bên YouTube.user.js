// ==UserScript==
// @name         Thu gọn thanh bên YouTube
// @name:en      YouTube Mininal Sidebar
// @namespace    https://github.com/vinh0519/Youtube-Minimal-Sidebar
// @version      0.1
// @description  Thu gọn thanh bên trang youtube và tận hưởng giao diện gọn đẹp.
// @description:en  Collapse sidebar on youtube site and get new clean ui
// @author       Vinh Táo fb
// @match           *.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var ab=document.getElementsByClassName('style-scope yt-icon-button')[1].getAttribute("aria-pressed");
    if(ab=="true")
    {
        var a=document.querySelectorAll('[id="guide-icon"],[icon="yt-icons:menu"],[class="style-scope ytd-masthead"],[aria-pressed="true"]');
        var n=a[3].querySelectorAll('[id="button"],[class="style-scope yt-icon-button"],[aria-label="Hướng dẫn"],[aria-pressed="true"]');
        //console.log(n[1]);
        n[1].click();
        //n.forEach(btn=>btn.click());

    }else
    {
        console.log("false");
    }
})();