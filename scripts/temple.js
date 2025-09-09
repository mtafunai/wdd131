const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const overlay = document.getElementById("overlay");

function toggleMenu() {
  navMenu.classList.toggle("show");
  overlay.classList.toggle("show");
  hamburger.textContent = navMenu.classList.contains("show") ? "✖" : "☰";
}

// Open/close menu
hamburger.addEventListener("click", toggleMenu);

// Close menu if overlay is clicked
overlay.addEventListener("click", toggleMenu);
