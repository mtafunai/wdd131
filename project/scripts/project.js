const destinations = [
    {
        name: "Suva",
        island: "Viti Levu",
        type: "City",
        category: "city",
        description:
            "Explore Fiji's capital city with museums, markets, gardens, restaurants, and waterfront views.",
        image:
            "https://images.unsplash.com/photo-1589979481223-deb893043163?auto=format&fit=crop&w=900&q=80"
    },
    {
        name: "Nadi",
        island: "Viti Levu",
        type: "City",
        category: "city",
        description:
            "Discover a lively gateway to Fiji with local markets, temples, restaurants, and nearby attractions.",
        image:
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80"
    },
    {
        name: "Coral Coast",
        island: "Viti Levu",
        type: "Beach",
        category: "beach",
        description:
            "Enjoy beautiful beaches, coral reefs, coastal villages, and scenic ocean views along Fiji's southern coast.",
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80"
    },
    {
        name: "Yasawa Islands",
        island: "Yasawa Group",
        type: "Beach",
        category: "beach",
        description:
            "Relax on tropical beaches and experience clear blue water, island villages, and unforgettable sunsets.",
        image:
            "https://images.unsplash.com/photo-1544550285-f813152fb2fd?auto=format&fit=crop&w=900&q=80"
    },
    {
        name: "Denarau Island",
        island: "Viti Levu",
        type: "Resort",
        category: "beach",
        description:
            "Enjoy resorts, beaches, golf, restaurants, and easy access to many popular island activities.",
        image:
            "https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&w=900&q=80"
    },
    {
        name: "Taveuni",
        island: "Vanua Levu",
        type: "Nature",
        category: "nature",
        description:
            "Discover waterfalls, rainforest, hiking trails, and spectacular natural scenery on Fiji's Garden Island.",
        image:
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80"
    }
];

const activities = [
    {
        name: "Snorkeling",
        type: "Water",
        icon: "🤿",
        description:
            "Explore Fiji's colourful coral reefs and discover tropical fish in clear warm waters.",
        location: "Coral Coast and Yasawa Islands"
    },
    {
        name: "Scuba Diving",
        type: "Water",
        icon: "🐠",
        description:
            "Experience Fiji's famous underwater world with coral reefs, marine life, and dramatic dive sites.",
        location: "Taveuni and surrounding islands"
    },
    {
        name: "Kayaking",
        type: "Water",
        icon: "🛶",
        description:
            "Paddle through calm coastal waters, lagoons, and island channels while enjoying tropical scenery.",
        location: "Yasawa Islands"
    },
    {
        name: "Hiking",
        type: "Nature",
        icon: "🥾",
        description:
            "Walk through tropical forests and discover viewpoints, waterfalls, and beautiful natural landscapes.",
        location: "Taveuni and Viti Levu"
    },
    {
        name: "Waterfalls",
        type: "Nature",
        icon: "💧",
        description:
            "Visit refreshing waterfalls surrounded by lush rainforest and tropical vegetation.",
        location: "Taveuni and Vanua Levu"
    },
    {
        name: "Village Experiences",
        type: "Culture",
        icon: "🏝️",
        description:
            "Learn about Fijian traditions, community life, crafts, ceremonies, and local customs.",
        location: "Fijian villages"
    },
    {
        name: "Local Food",
        type: "Culture",
        icon: "🍽️",
        description:
            "Taste traditional Fijian dishes and experience the flavours of fresh local ingredients.",
        location: "Markets and local communities"
    },
    {
        name: "Beach Relaxation",
        type: "Relaxation",
        icon: "🌴",
        description:
            "Relax on beautiful beaches, enjoy the sunshine, and take in Fiji's peaceful island atmosphere.",
        location: "Fiji's islands and coastline"
    }
];

function setupNavigation() {
    const menuButton = document.querySelector("#menu-button");
    const navigation = document.querySelector("#site-nav");

    if (!menuButton || !navigation) {
        return;
    }

    menuButton.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("open");

        menuButton.setAttribute("aria-expanded", isOpen);

        if (isOpen) {
            menuButton.setAttribute("aria-label", "Close navigation");
            menuButton.textContent = "✕";
        } else {
            menuButton.setAttribute("aria-label", "Open navigation");
            menuButton.textContent = "☰";
        }
    });

    const navigationLinks = navigation.querySelectorAll("a");

    navigationLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navigation.classList.remove("open");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Open navigation");
            menuButton.textContent = "☰";
        });
    });
}

function updateYear() {
    const yearElement = document.querySelector("#current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

function updateDateTime() {
    const dateElement = document.querySelector("#current-date");
    const timeElement = document.querySelector("#current-time");

    if (!dateElement || !timeElement) {
        return;
    }

    const now = new Date();

    dateElement.textContent = now.toLocaleDateString("en-FJ", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    timeElement.textContent = now.toLocaleTimeString("en-FJ", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
}


function createDestinationCard(destination) {
    return `
        <article class="card destination-card">
            <img
                src="${destination.image}"
                alt="${destination.name} in Fiji"
                width="900"
                height="600"
                loading="lazy"
            >

            <div class="card-content">
                <p class="card-label">
                    ${destination.type} • ${destination.island}
                </p>

                <h3>${destination.name}</h3>

                <p>${destination.description}</p>

                <a
                    class="text-link"
                    href="destinations.html?place=${encodeURIComponent(destination.name)}"
                    aria-label="Explore ${destination.name}"
                >
                    Explore ${destination.name}
                </a>
            </div>
        </article>
    `;
}


function displayFeaturedDestinations() {
    const destinationContainer = document.querySelector(
        "#featured-destinations"
    );

    if (!destinationContainer) {
        return;
    }

    const featuredDestinations = destinations.slice(0, 3);

    destinationContainer.innerHTML = featuredDestinations
        .map(createDestinationCard)
        .join("");
}



function displayDestinations(filter = "all") {
    const destinationContainer = document.querySelector(
        "#destination-list"
    );

    const message = document.querySelector("#destination-message");

    if (!destinationContainer) {
        return;
    }

    const filteredDestinations =
        filter === "all"
            ? destinations
            : destinations.filter(
                (destination) => destination.category === filter
            );

    if (filteredDestinations.length === 0) {
        destinationContainer.innerHTML = "";

        if (message) {
            message.textContent =
                "No destinations were found for this category.";
        }

        return;
    }

    if (message) {
        message.textContent = "";
    }

    destinationContainer.innerHTML = filteredDestinations
        .map(createDestinationCard)
        .join("");
}



function displaySelectedDestination(destinationName) {
    const destinationContainer = document.querySelector(
        "#destination-list"
    );

    const message = document.querySelector("#destination-message");

    if (!destinationContainer || !destinationName) {
        return;
    }

    const selectedDestination = destinations.find(
        (destination) =>
            destination.name.toLowerCase() ===
            destinationName.toLowerCase()
    );

    if (!selectedDestination) {
        if (message) {
            message.textContent =
                "Sorry, that destination could not be found.";
        }

        displayDestinations();
        return;
    }

    destinationContainer.innerHTML =
        createDestinationCard(selectedDestination);

    if (message) {
        message.textContent = "";
    }

    const filter = document.querySelector("#destination-filter");

    if (filter) {
        filter.value = "all";
    }
}



function setupDestinationFilter() {
    const filter = document.querySelector("#destination-filter");

    if (!filter) {
        return;
    }

    filter.addEventListener("change", (event) => {
        displayDestinations(event.target.value);
    });
}



function createActivityCard(activity) {
    return `
        <article class="card activity-card">
            <div class="activity-icon" aria-hidden="true">
                ${activity.icon}
            </div>

            <div class="card-content">
                <p class="card-label">${activity.type}</p>

                <h3>${activity.name}</h3>

                <p>${activity.description}</p>

                <p>
                    <strong>Where:</strong>
                    ${activity.location}
                </p>
            </div>
        </article>
    `;
}



function displayActivities(filter = "all") {
    const activityContainer = document.querySelector("#activity-list");
    const message = document.querySelector("#activity-message");

    if (!activityContainer) {
        return;
    }

    const filteredActivities =
        filter === "all"
            ? activities
            : activities.filter(
                (activity) =>
                    activity.type.toLowerCase() ===
                    filter.toLowerCase()
            );

    if (filteredActivities.length === 0) {
        activityContainer.innerHTML = "";

        if (message) {
            message.textContent =
                "No activities were found for this category.";
        }

        return;
    }

    if (message) {
        message.textContent = "";
    }

    activityContainer.innerHTML = filteredActivities
        .map(createActivityCard)
        .join("");
}



function setupActivityFilter() {
    const filter = document.querySelector("#activity-filter");

    if (!filter) {
        return;
    }

    filter.addEventListener("change", (event) => {
        displayActivities(event.target.value);
    });
}



function saveVisitorPreference(name, interest) {
    const visitorPreference = {
        name: name,
        interest: interest
    };

    localStorage.setItem(
        "fijiExplorerPreference",
        JSON.stringify(visitorPreference)
    );
}

function loadVisitorPreference() {
    const savedPreference = localStorage.getItem(
        "fijiExplorerPreference"
    );

    if (!savedPreference) {
        return;
    }

    try {
        const preference = JSON.parse(savedPreference);

        const nameInput = document.querySelector("#name");
        const interestSelect = document.querySelector("#interest");

        if (nameInput && preference.name) {
            nameInput.value = preference.name;
        }

        if (interestSelect && preference.interest) {
            interestSelect.value = preference.interest;
        }
    } catch (error) {
        localStorage.removeItem("fijiExplorerPreference");
    }
}



function setupContactForm() {
    const form = document.querySelector("#contact-form");

    if (!form) {
        return;
    }

    loadVisitorPreference();

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const nameInput = document.querySelector("#name");
        const emailInput = document.querySelector("#email");
        const interestSelect = document.querySelector("#interest");
        const messageInput = document.querySelector("#message");
        const savePreference =
            document.querySelector("#save-preference");
        const formMessage = document.querySelector("#form-message");

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const interest = interestSelect.value;
        const message = messageInput.value.trim();

        if (
            name.length < 2 ||
            email.length === 0 ||
            interest === "" ||
            message.length < 10
        ) {
            formMessage.textContent =
                "Please complete all required fields before submitting.";
            return;
        }

        if (savePreference && savePreference.checked) {
            saveVisitorPreference(name, interest);
        }

        formMessage.textContent =
            `Thank you, ${name}! Your message has been received. We will review your interest in ${interest}.`;

        form.reset();

        if (savePreference && savePreference.checked) {
            loadVisitorPreference();
        }
    });
}



function initializeSite() {
    setupNavigation();
    updateYear();
    updateDateTime();

    displayFeaturedDestinations();

    const pageParams = new URLSearchParams(window.location.search);
    const selectedPlace = pageParams.get("place");

    if (selectedPlace) {
        displaySelectedDestination(selectedPlace);
    } else {
        displayDestinations();
    }

    setupDestinationFilter();
    displayActivities();
    setupActivityFilter();
    setupContactForm();
}

initializeSite();