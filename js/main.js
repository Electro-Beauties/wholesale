const images = [
    "https://picsum.photos/400/300?random=1",
    "https://picsum.photos/400/300?random=2",
    "https://picsum.photos/400/300?random=3",
    "https://picsum.photos/400/300?random=4",
    "https://picsum.photos/400/300?random=5"
];

const btn = document.getElementById("newImageBtn");
const img = document.getElementById("randomImage");

btn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    img.src = images[randomIndex];
});
