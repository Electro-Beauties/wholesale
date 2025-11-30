import images from './js/data.js';

const btn = document.getElementById("newImageBtn");
const img = document.getElementById("randomImage");

randomIndex = Math.floor(Math.random() * images.length);
img.src = images[randomIndex];

btn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    img.src = images[randomIndex];
});
