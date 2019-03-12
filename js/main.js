"use strict";
{
    const btn = document.getElementById("btn");

    btn.addEventListener("click", () => {
        btn.textContent = "hit!";
    });

    btn.addEventListener("mousedown", () => {
        btn.classList.add("pressed");
    });

    btn.addEventListener("mouseup", () => {
        btn.classList.remove("pressed");
    });
}
