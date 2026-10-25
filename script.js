
function showPage(pageId) {
  document.querySelectorAll(".screen").forEach((page) => {
    page.classList.add("hidden");
  });

  const selectedPage = document.getElementById(pageId);

  if (selectedPage) {
    selectedPage.classList.remove("hidden");
    selectedPage.classList.remove("page-animation");

    // Restart the entrance animation
    void selectedPage.offsetWidth;
    selectedPage.classList.add("page-animation");
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

const photos = [
  "photos/photos1.jpg",
  "photos/photos2.jpg",
  "photos/photos3.jpg",
  "photos/photos4.jpg"
];

let currentPhoto = 0;

const photo = document.getElementById("photo");
const photoCount = document.getElementById("photoCount");

document.getElementById("nextBtn").addEventListener("click", function () {
  currentPhoto = (currentPhoto + 1) % photos.length;
  updatePhoto();
});

document.getElementById("prevBtn").addEventListener("click", function () {
  currentPhoto = (currentPhoto - 1 + photos.length) % photos.length;
  updatePhoto();
});

function updatePhoto() {
  photo.src = photos[currentPhoto];
  photoCount.textContent = `${currentPhoto + 1} / ${photos.length}`;
}

// FLOATING HEARTS
const heartsContainer = document.getElementById("hearts");
const heartSymbols = ["💙", "💗", "💕", "✨", "🌸"];

function createHeart() {
  const heart = document.createElement("span");
  heart.className = "heart";

  heart.textContent =
    heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (14 + Math.random() * 18) + "px";
  heart.style.animationDuration = (5 + Math.random() * 5) + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 10000);
}

setInterval(createHeart, 500);
