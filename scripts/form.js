/* scripts.js
   - populates the product select in form.html using the provided products array
   - provides a small helper for review.html to map id -> product object
*/

/* Product data as required by the assignment */
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

/* ---------- Helpers ---------- */
function scripts_populateProductSelect() {
  const sel = document.getElementById('product');
  if (!sel) return;
  // Remove any non-placeholder options just in case
  // (preserve the first placeholder option)
  while (sel.options.length > 1) sel.remove(1);

  products.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.id;          // use product id for value (per JS spec)
    opt.textContent = p.name;  // user sees product name
    sel.appendChild(opt);
  });
}

/* Find product by id (used by review.html) */
function scripts_findProductById(id) {
  if (!id) return null;
  return products.find(p => p.id === id) || null;
}

/* Only run populate when on the form page */
document.addEventListener('DOMContentLoaded', function () {
  scripts_populateProductSelect();

  // Star rating: make the stars visually fill when selected.
  // Basic approach: when a radio is checked, add 'rated' class to container and style via CSS.
  const starsContainer = document.querySelector('.stars');
  if (starsContainer) {
    const radios = starsContainer.querySelectorAll('input[type="radio"]');
    radios.forEach(r => {
      r.addEventListener('change', () => {
        // When one selected, add class to each label up to that one to create the "filled" effect.
        const val = parseInt(r.value, 10);
        const labels = starsContainer.querySelectorAll('label');
        labels.forEach(label => {
          const labelFor = label.getAttribute('for');
          const associatedRadio = document.getElementById(labelFor);
          if (!associatedRadio) return;
          const lblVal = parseInt(associatedRadio.value, 10);
          if (lblVal <= val) label.classList.add('filled');
          else label.classList.remove('filled');
        });
      });
    });

    // If page loads and a rating is preselected (unlikely), ensure filled classes are set
    const checked = starsContainer.querySelector('input[type="radio"]:checked');
    if (checked) {
      checked.dispatchEvent(new Event('change'));
    }
  }

  // Accessibility: ensure keyboard focus styles are obvious (handled by CSS)
});
