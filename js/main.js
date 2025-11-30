import { images } from '/js/data.js';

const btn = document.getElementById("newImageBtn");
const img = document.getElementById("randomImage");

let randomIndex = Math.floor(Math.random() * images.length);
img.src = images[randomIndex];

btn.addEventListener("click", () => {
    randomIndex = Math.floor(Math.random() * images.length);
    img.src = images[randomIndex];
});
