"use strict";
{
    const btn = document.getElementById("btn");
    const results = ["大吉", "中吉", "小吉", "末吉", "吉", "凶", "大凶"];
    btn.addEventListener("click", () => {
        const n = Math.floor(Math.random() * results.length);
        btn.textContent = results[n];
    });

    btn.addEventListener("mousedown", () => {
        btn.classList.add("pressed");
    });

    btn.addEventListener("mouseup", () => {
        btn.classList.remove("pressed");
    });
}
