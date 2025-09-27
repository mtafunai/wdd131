const temples = [
  { templeName: "Aba Nigeria", location: "Aba, Nigeria", dedicated: "2005-08-07", area: 11500, imageUrl: "https://churchofjesuschristtemples.org/wp-content/uploads/aba-nigeria-temple.jpg" },
  { templeName: "Manti Utah", location: "Manti, Utah, United States", dedicated: "1888-05-21", area: 74792, imageUrl: "https://churchofjesuschristtemples.org/wp-content/uploads/manti-utah-temple.jpg" },
  { templeName: "Payson Utah", location: "Payson, Utah, United States", dedicated: "2015-06-07", area: 96630, imageUrl: "https://churchofjesuschristtemples.org/wp-content/uploads/payson-utah-temple.jpg" },
  { templeName: "Yigo Guam", location: "Yigo, Guam", dedicated: "2020-05-02", area: 6861, imageUrl: "https://churchofjesuschristtemples.org/wp-content/uploads/yigo-guam-temple.jpg" },
  { templeName: "Washington D.C.", location: "Kensington, Maryland, United States", dedicated: "1974-11-19", area: 156558, imageUrl: "https://churchofjesuschristtemples.org/wp-content/uploads/washington-dc-temple.jpg" },
  { templeName: "Lima Perú", location: "Lima, Perú", dedicated: "1986-01-10", area: 9600, imageUrl: "https://churchofjesuschristtemples.org/wp-content/uploads/lima-peru-temple.jpg" },
  { templeName: "Mexico City Mexico", location: "Mexico City, Mexico", dedicated: "1983-12-02", area: 116642, imageUrl: "https://churchofjesuschristtemples.org/wp-content/uploads/mexico-city-mexico-temple.jpg" },
  { templeName: "Tokyo Japan", location: "Tokyo, Japan", dedicated: "1980-10-27", area: 68000, imageUrl: "https://churchofjesuschristtemples.org/wp-content/uploads/tokyo-japan-temple.jpg" },
  { templeName: "Rome Italy", location: "Rome, Italy", dedicated: "2019-03-10", area: 9500, imageUrl: "https://churchofjesuschristtemples.org/wp-content/uploads/rome-italy-temple.jpg" },
  { templeName: "Sydney Australia", location: "Sydney, Australia", dedicated: "1984-09-15", area: 97000, imageUrl: "https://churchofjesuschristtemples.org/wp-content/uploads/sydney-australia-temple.jpg" }
];


// Function to display temple cards
function displayTemples(templesToDisplay) {
    const container = document.getElementById("temples-container");
    container.innerHTML = "";

    templesToDisplay.forEach(temple => {
        const card = document.createElement("div");
        card.classList.add("temple-card");

        card.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            <div class="details">
                <h2>${temple.templeName}</h2>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
            </div>
        `;
        container.appendChild(card);
    });
}

// Filter temples
function filterTemples(criteria) {
    let filtered = [];
    switch(criteria) {
        case 'old':
            filtered = temples.filter(t => new Date(t.dedicated) < new Date("1900-01-01"));
            break;
        case 'new':
            filtered = temples.filter(t => new Date(t.dedicated) > new Date("2000-01-01"));
            break;
        case 'large':
            filtered = temples.filter(t => t.area > 90000);
            break;
        case 'small':
            filtered = temples.filter(t => t.area < 10000);
            break;
        default:
            filtered = temples;
    }
    displayTemples(filtered);
}

// Event listeners
document.getElementById("home").addEventListener("click", () => filterTemples("all"));
document.getElementById("old").addEventListener("click", () => filterTemples("old"));
document.getElementById("new").addEventListener("click", () => filterTemples("new"));
document.getElementById("large").addEventListener("click", () => filterTemples("large"));
document.getElementById("small").addEventListener("click", () => filterTemples("small"));

// Initial display
displayTemples(temples);
