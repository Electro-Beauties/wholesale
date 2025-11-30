const images = [

];

const btn = document.getElementById("newImageBtn");
const img = document.getElementById("randomImage");

btn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    img.src = images[randomIndex];
});
