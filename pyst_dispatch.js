// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://pystyle.info/apps/mahjong-nanikiru-simulator/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pystyle.info
// @grant        none
// ==/UserScript==

(function() {
    //'use strict';

    //document.body.style.backgroundColor = "#ccffcc";
    //document.html.style.msTouchAction ="manipulation";
    window.addEventListener('message', (ee) => {
        console.log("kita");
        //console.log(event.origin);
        console.log(ee.data);

        //var til =document.querySelector(".tiles")
        var til = document.querySelector("#__BVID__78");//#__BVID__74__BV_tab_container_
        var imgs =til.querySelectorAll("img");
        var five_count =0;
        for(var i=0;i<ee.data.length;i++){
            var num = ee.data[i];
            if(num==5){
                five_count++;
                if(five_count>=4){
                    num=10;
                }
            }
            imgs[num-1+20].click();
        }
        var til2 = document.querySelector(".dora_indicators");//#__BVID__74__BV_tab_container_
        var imgs2 =til2.querySelectorAll("img");
        imgs2[2].click();

        setTimeout(() => {
            var selects=document.getElementById("input-turn");
            console.log(selects.options[7]);
            selects.options[7].selected = true;
            selects.dispatchEvent(new Event("change"));
        },500);

        console.log(imgs.length);
    });
    console.log("start");
})();