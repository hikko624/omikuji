"use strict";
{
    console.log("すみません！許してください！何でもしますから！！！");
    const btn = document.getElementById("btn");
    const results = [
        "大吉",
        "大吉",
        "中吉",
        "中吉",
        "中吉",
        "中吉",
        "小吉",
        "小吉",
        "小吉",
        "小吉",
        "小吉",
        "小吉",
        "吉",
        "吉",
        "吉",
        "吉",
        "吉",
        "吉",
        "吉",
        "吉",
        "半吉",
        "半吉",
        "半吉",
        "半吉",
        "半吉",
        "半吉",
        "半吉",
        "半吉",
        "末吉",
        "末吉",
        "末吉",
        "末吉",
        "末吉",
        "末吉",
        "末吉",
        "末吉",
        "末小吉",
        "末小吉",
        "末小吉",
        "末小吉",
        "末小吉",
        "末小吉",
        "末小吉",
        "末小吉",
        "凶",
        "凶",
        "凶",
        "凶",
        "凶",
        "凶",
        "小凶",
        "小凶",
        "小凶",
        "小凶",
        "小凶",
        "小凶",
        "半凶",
        "半凶",
        "半凶",
        "半凶",
        "半凶",
        "半凶",
        "末凶",
        "末凶",
        "末凶",
        "末凶",
        "末凶",
        "末凶",
        "大凶",
        "大凶",
        "ぱちお"
    ];
    btn.addEventListener("click", () => {
        const n = Math.floor(Math.random() * results.length);
        btn.textContent = results[n];
        if (btn.textContent === "ぱちお" && !btn.classList.contains("ぱちお")) {
            console.log("あっ！ぱちおだ！！！");
            btn.classList.add("patioglass");
        } else {
            btn.classList.remove("patioglass");
        }
    });

    // btn.addEventListener("mousedown", () => {
    //     btn.classList.add("pressed");
    // });

    // btn.addEventListener("mouseup", () => {
    //     btn.classList.remove("pressed");
    // });

    const twibtn = document.getElementById("twibtn");

    twibtn.addEventListener("click", () => {
        window.open(
            this.href,
            "twitter_window",
            "width=400, height=300, menubar=no, toolbar=no, scrollbars=yes"
        ).location.href =
            "https://twitter.com/share?url=" +
            "https://hikomikuji.herokuapp.com/index.html" +
            "&text=" +
            encodeURIComponent(getOmikujiText(`${btn.textContent}`)) +
            "&hashtags=" +
            encodeURIComponent("今日のひこみくじ") +
            "&count=none&lang=ja";
    });

    function getOmikujiText(text) {
        if (text === "Push!") {
            return "おい。まず押してから呟けや。";
        } else {
            return "あなたの運勢は" + text + "です";
        }
    }
}
