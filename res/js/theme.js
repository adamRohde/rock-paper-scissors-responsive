let root = document.querySelector(":root");

document.getElementById("dark-mode").onclick = function () {
    root.style.setProperty("--theme-color-nav", "rgb(19, 13, 13)");
    root.style.setProperty("--theme-color-back", "rgb(59, 52, 52)");
    root.style.setProperty("--theme-color-scoreBars", "rgb(255, 0, 0)");
    root.style.setProperty("--theme-color-text", "rgb(255, 255, 255)");
    root.style.setProperty("--theme-color-burger", "rgb(255, 255, 255)");
    root.style.setProperty("--theme-color-hands", "tan");
    root.style.setProperty("--theme-color-buttons", "rgb(230, 230, 233)");
};

document.getElementById("light-mode").onclick = function () {
    root.style.setProperty("--theme-color-nav", "rgb(213, 213, 213)");
    root.style.setProperty("--theme-color-back", "rgb(255, 255, 255)");
    root.style.setProperty("--theme-color-scoreBars", "rgb(255, 0, 0)");
    root.style.setProperty("--theme-color-text", "rgb(0, 0, 0)");
    root.style.setProperty("--theme-color-burger", "rgb(64, 64, 64)");
    root.style.setProperty("--theme-color-hands", "tan");
    root.style.setProperty("--theme-color-buttons", "rgb(64, 64, 64)");
};

// Dark Theme Colors
//     --theme-color-nav: rgb(19, 13, 13);
//     --theme-color-back: rgb(59, 52, 52);
//     --theme-color-scoreBars: rgb(255, 0, 0);
//     --theme-color-keys-secondary: rgb(191, 191, 191);
//     --theme-color-text: rgb(255, 255, 255);
//     --theme-color-burger: rgb(255, 255, 255);
//     --theme-color-hands: tan;
//     --theme-color-buttons: rgb(230, 230, 233);

// Light Theme Colors
//      --theme-color-nav: rgb(213, 213, 213);
//      --theme-color-back: rgb(245, 245, 245);
//      --theme-color-scoreBars: rgb(255, 0, 0);
//      --theme-color-keys-secondary: rgb(191, 191, 191);
//      --theme-color-text: rgb(0, 0, 0);
//      --theme-color-burger: rgb(64, 64, 64);
//      --theme-color-hands: tan;
//      --theme-color-buttons: lightgray;
