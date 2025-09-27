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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  }
];

// Add 3 additional temples
temples.push(
  {
    templeName: "Nairobi Kenya",
    location: "Nairobi, Kenya",
    dedicated: "2019, October, 13",
    area: 10000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/nairobi-kenya/400x250/nairobi-kenya-temple-exterior.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 34600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/400x250/rome-italy-temple-1.jpg"
  },
  {
    templeName: "Sapporo Japan",
    location: "Sapporo, Japan",
    dedicated: "2016, October, 16",
    area: 10000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sapporo-japan/400x250/sapporo-japan-temple-exterior.jpg"
  }
);

// DOM elements
const container = document.getElementById('temple-cards');
const countEl = document.getElementById('count');
const activeFilterEl = document.getElementById('active-filter');
const navButtons = Array.from(document.querySelectorAll('.nav-btn'));

// Create card
function createTempleCard(t) {
  const card = document.createElement('article');
  card.className = 'temple-card';
  card.setAttribute('tabindex','0');
  card.innerHTML = `
    <div class="card-media">
      <img src="${t.imageUrl}" alt="${t.templeName}" loading="lazy" decoding="async">
    </div>
    <div class="card-body">
      <h2>${t.templeName}</h2>
      <p class="meta"><strong>Location:</strong> ${t.location}</p>
      <p class="meta"><strong>Dedicated:</strong> ${new Date(t.dedicated).toLocaleDateString()}</p>
      <p class="meta"><strong>Area:</strong> ${t.area.toLocaleString()} sq ft</p>
    </div>
  `;
  return card;
}

// Display cards
function displayTemples(list){
  container.innerHTML='';
  if(!list.length){
    container.innerHTML='<div style="padding:1rem;color:#667085;">No temples match this filter.</div>';
  } else {
    const frag = document.createDocumentFragment();
    list.forEach(t=>frag.appendChild(createTempleCard(t)));
    container.appendChild(frag);
  }
  countEl.textContent = `Showing ${list.length} temple${list.length===1?'':'s'}`;
}

// Initial render
displayTemples(temples);

// Active button highlight
function setActiveButton(id){
  navButtons.forEach(b=>b.classList.toggle('active',b.id===id));
  navButtons.forEach(b=>b.setAttribute('aria-pressed',b.id===id?'true':'false'));
  activeFilterEl.textContent=`Filter: ${id.charAt(0).toUpperCase()+id.slice(1)}`;
}

// Filters
document.getElementById('home').addEventListener('click',()=>{setActiveButton('home'); displayTemples(temples);});
document.getElementById('old').addEventListener('click',()=>{setActiveButton('old'); displayTemples(temples.filter(t=>new Date(t.dedicated).getFullYear()<1900));});
document.getElementById('new').addEventListener('click',()=>{setActiveButton('new'); displayTemples(temples.filter(t=>new Date(t.dedicated).getFullYear()>2000));});
document.getElementById('large').addEventListener('click',()=>{setActiveButton('large'); displayTemples(temples.filter(t=>t.area>90000));});
document.getElementById('small').addEventListener('click',()=>{setActiveButton('small'); displayTemples(temples.filter(t=>t.area<10000));});

// Initial render
displayTemples(temples);

// Set "Home" as active on page load
setActiveButton('home');
