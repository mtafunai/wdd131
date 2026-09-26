const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-4771-main.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-516-main.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-1403-main.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/yigo-guam-temple-182-main.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/washington-dc-temple/washington-dc-temple-458-main.jpg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-temple/lima-peru-temple-367-main.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-134-main.jpg"
    },
    {
        templeName: "Salt Lake Utah",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-1-main.jpg"
    },
    {
        templeName: "Laie Hawaii",
        location: "Laie, Hawaii, United States",
        dedicated: "1919, November, 27",
        area: 42100,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-1-main.jpg"
    },
    {
        templeName: "Fiji Suva",
        location: "Suva, Fiji",
        dedicated: "2000, June, 18",
        area: 12985,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/suva-fiji-temple/suva-fiji-temple-1-main.jpg"
    }
];

const container = document.querySelector("#temple-container");
const navLinks = document.querySelectorAll("nav a");
const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");


function displayTemples(filteredTemples) {
    container.innerHTML = "";

    filteredTemples.forEach((temple) => {
        const card = document.createElement("article");
        card.classList.add("temple-card");

        const name = document.createElement("h3");
        name.textContent = temple.templeName;

        const location = document.createElement("p");
        location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

        const dedicated = document.createElement("p");
        dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

        const area = document.createElement("p");
        area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;

        const image = document.createElement("img");

        image.src = temple.imageUrl;
        image.alt = `${temple.templeName} temple`;
        image.loading = "lazy";

        // Display a message if an image cannot be loaded
        image.addEventListener("error", () => {
            image.alt = `Image unavailable for ${temple.templeName}`;
            image.style.display = "none";

            const message = document.createElement("p");
            message.textContent = "Temple image could not be loaded.";
            message.classList.add("image-error");

            card.appendChild(message);
        });

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        container.appendChild(card);
    });
}


function filterTemples(filter) {
    let filteredTemples = temples;

    if (filter === "old") {
        filteredTemples = temples.filter((temple) => {
            const year = Number(temple.dedicated.split(",")[0]);
            return year < 1900;
        });
    }

    if (filter === "new") {
        filteredTemples = temples.filter((temple) => {
            const year = Number(temple.dedicated.split(",")[0]);
            return year > 2000;
        });
    }

    if (filter === "large") {
        filteredTemples = temples.filter((temple) => {
            return temple.area > 90000;
        });
    }

    if (filter === "small") {
        filteredTemples = temples.filter((temple) => {
            return temple.area < 10000;
        });
    }

    displayTemples(filteredTemples);
}


navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        const filter = link.dataset.filter;

        filterTemples(filter);

        navigation.classList.remove("open");

        menuButton.textContent = "☰";

        menuButton.setAttribute("aria-expanded", "false");

        menuButton.setAttribute(
            "aria-label",
            "Open navigation menu"
        );
    });
});


menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");

    menuButton.textContent = isOpen ? "✕" : "☰";

    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.setAttribute(
        "aria-label",
        isOpen
            ? "Close navigation menu"
            : "Open navigation menu"
    );
});


document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modification: ${document.lastModified}`;


displayTemples(temples);
