<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Filtered Temples Gallery</title>
    <style>
        /* === CSS from filtered-temples.css === */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
        }
        header {
            background-color: #2c3e50;
            color: white;
            padding: 1rem;
            text-align: center;
        }
        header h1 { margin: 0; }
        nav { margin-top: 0.5rem; }
        nav button {
            margin: 0 0.5rem;
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            background-color: #34495e;
            color: white;
            transition: background-color 0.3s, transform 0.2s;
        }
        nav button:hover { background-color: #1abc9c; transform: scale(1.05); }
        nav button.active { background-color: #1abc9c; transform: scale(1.05); }
        #temples-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
            padding: 1rem;
        }
        .temple-card {
            background-color: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            transition: transform 0.2s, box-shadow 0.3s;
        }
        .temple-card:hover {
            transform: scale(1.03);
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }
        .temple-card img { width: 100%; height: auto; display: block; }
        .temple-card .details { padding: 0.5rem 1rem; }
        .temple-card .details h2 { font-size: 1.2rem; margin: 0.5rem 0; }
        .temple-card .details p { margin: 0.25rem 0; font-size: 0.9rem; }
        @media (max-width: 600px) {
            nav button { margin: 0.25rem; padding: 0.4rem 0.8rem; }
            .temple-card .details h2 { font-size: 1rem; }
            .temple-card .details p { font-size: 0.85rem; }
        }
    </style>
</head>
<body>
    <header>
        <h1>Temple Gallery</h1>
        <nav>
            <button id="home">Home</button>
            <button id="old">Old</button>
            <button id="new">New</button>
            <button id="large">Large</button>
            <button id="small">Small</button>
        </nav>
    </header>

    <main id="temples-container">
        <!-- Temple cards will be dynamically injected here -->
    </main>

    <script>
        // === JS from filtered-temples.js ===
        document.addEventListener("DOMContentLoaded", () => {
            const temples = [
              { templeName: "Aba Nigeria", location: "Aba, Nigeria", dedicated: "2005-08-07", area: 11500, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg" },
              { templeName: "Manti Utah", location: "Manti, Utah, United States", dedicated: "1888-05-21", area: 74792, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg" },
              { templeName: "Payson Utah", location: "Payson, Utah, United States", dedicated: "2015-06-07", area: 96630, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg" },
              { templeName: "Yigo Guam", location: "Yigo, Guam", dedicated: "2020-05-02", area: 6861, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg" },
              { templeName: "Washington D.C.", location: "Kensington, Maryland, United States", dedicated: "1974-11-19", area: 156558, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg" },
              { templeName: "Lima Perú", location: "Lima, Perú", dedicated: "1986-01-10", area: 9600, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg" },
              { templeName: "Mexico City Mexico", location: "Mexico City, Mexico", dedicated: "1983-12-02", area: 116642, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg" },
              { templeName: "Tokyo Japan", location: "Tokyo, Japan", dedicated: "1980-10-27", area: 68000, imageUrl: "https://via.placeholder.com/400x250?text=Tokyo+Japan" },
              { templeName: "Rome Italy", location: "Rome, Italy", dedicated: "2019-03-10", area: 9500, imageUrl: "https://via.placeholder.com/400x250?text=Rome+Italy" },
              { templeName: "Sydney Australia", location: "Sydney, Australia", dedicated: "1984-09-15", area: 97000, imageUrl: "https://via.placeholder.com/400x250?text=Sydney+Australia" }
            ];

            const container = document.getElementById("temples-container");
            const buttons = document.querySelectorAll("nav button");

            function displayTemples(templesToDisplay) {
                container.innerHTML = "";
                templesToDisplay.forEach(temple => {
                    const card = document.createElement("div");
                    card.classList.add("temple-card");

                    const img = document.createElement("img");
                    img.alt = temple.templeName;
                    img.loading = "lazy";
                    img.src = temple.imageUrl;
                    img.onerror = () => img.src = `https://via.placeholder.com/400x250?text=${encodeURIComponent(temple.templeName)}`;

                    const details = document.createElement("div");
                    details.classList.add("details");
                    details.innerHTML = `
                        <h2>${temple.templeName}</h2>
                        <p><strong>Location:</strong> ${temple.location}</p>
                        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
                    `;

                    card.appendChild(img);
                    card.appendChild(details);
                    container.appendChild(card);
                });
            }

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
                highlightButton(criteria);
            }

            function highlightButton(activeCriteria) {
                buttons.forEach(btn => {
                    btn.classList.remove("active");
                    if (btn.id === activeCriteria || (activeCriteria === "all" && btn.id === "home")) {
                        btn.classList.add("active");
                    }
                });
            }

            document.getElementById("home").addEventListener("click", () => filterTemples("all"));
            document.getElementById("old").addEventListener("click", () => filterTemples("old"));
            document.getElementById("new").addEventListener("click", () => filterTemples("new"));
            document.getElementById("large").addEventListener("click", () => filterTemples("large"));
            document.getElementById("small").addEventListener("click", () => filterTemples("small"));

            // Initial display
            filterTemples("all");
        });
    </script>
</body>
</html>
