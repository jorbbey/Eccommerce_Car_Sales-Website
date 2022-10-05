"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clickFunc = () => {
    let btn = document.querySelector("#my-btn");
    btn.addEventListener('click', () => {
        alert("I am a Boy");
    });
};
clickFunc();
