const menuData = [
  { id: 'm1', title: 'Fish Miti', price: 12 },
  { id: 'm2', title: 'Lovo', price: 15 },
  { id: 'm3', title: 'Rourou Lamb', price: 12 },
  { id: 'm4', title: 'Dessert', price: 5 }
];

// Load favorites from localStorage (or empty array if none yet)
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// Render favorites list
function renderFavorites() {
  const list = document.getElementById("favorites-list");
  if (!list) return;
  
  if (favorites.length === 0) {
    list.innerHTML = `<li>No favorites yet</li>`;
    return;
  }

  list.innerHTML = favorites.map(fav => {
    const item = menuData.find(m => m.id === fav);

    // ✅ Conditional branching + template literal
    const label = item.price > 10 ? " (Premium Item)" : "";

    return `
      <li>
        ${item.title} - $${item.price}${label}
        <button onclick="removeFavorite('${item.id}')">Remove</button>
      </li>
    `;
  }).join('');
}

// Add to favorites
function addFavorite(id) {
  if (!favorites.includes(id)) {
    favorites.push(id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    renderFavorites();
  } else {
    alert(`"${id}" is already in your favorites!`);
  }
}

// Remove from favorites
function removeFavorite(id) {
  favorites = favorites.filter(fav => fav !== id);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  renderFavorites();
}

// Contact form handling
function contactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const count = document.getElementById('submit-count');
  const confirmEl = document.getElementById('form-confirm');
  let submitted = 0;

  form.addEventListener('submit', e => {
    e.preventDefault();
    submitted++;
    count.textContent = submitted;

    // ✅ Conditional branching + template literals
    confirmEl.textContent = 
      submitted === 1 
        ? `Message sent!` 
        : `Thanks again! You have submitted ${submitted} messages.`;

    form.reset();
  });
}

// Run when page loads
document.addEventListener('DOMContentLoaded', () => {
  renderFavorites();
  contactForm();
});
