const destinations = [
    {
        name: `Suva`,
        island: `Viti Levu`,
        type: `city`,
        category: `Culture`,
        description: `Fiji's capital city offers museums, gardens, markets, waterfront areas, and opportunities to experience urban Fijian life.`,
        image: `https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80`
    },
    {
        name: `Nadi`,
        island: `Viti Levu`,
        type: `city`,
        category: `Adventure`,
        description: `Nadi is a popular starting point for exploring western Viti Levu, nearby islands, markets, and cultural attractions.`,
        image: `https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=1000&q=80`
    },
    {
        name: `Coral Coast`,
        island: `Viti Levu`,
        type: `beach`,
        category: `Beaches`,
        description: `The Coral Coast follows Fiji's southern shoreline and is known for coastal scenery, beaches, villages, and outdoor experiences.`,
        image: `https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80`
    },
    {
        name: `Yasawa Islands`,
        island: `Western Fiji`,
        type: `beach`,
        category: `Beaches`,
        description: `The Yasawa Islands offer tropical island scenery, beaches, snorkeling opportunities, and a quieter island atmosphere.`,
        image: `https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80`
    },
    {
        name: `Denarau`,
        island: `Viti Levu`,
        type: `beach`,
        category: `Resort`,
        description: `Denarau is a developed resort area near Nadi with accommodation, restaurants, leisure facilities, and access to island excursions.`,
        image: `https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&w=1000&q=80`
    },
    {
        name: `Taveuni`,
        island: `Vanua Levu region`,
        type: `nature`,
        category: `Nature`,
        description: `Taveuni is known for lush landscapes, forests, waterfalls, and opportunities to experience Fiji's natural environment.`,
        image: `https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1000&q=80`
    }
];

const activities = [
    {
        name: `Snorkeling`,
        type: `water`,
        icon: `🤿`,
        description: `Explore Fiji's tropical waters and observe colorful marine life in suitable coastal areas.`,
        location: `Coastal Fiji`
    },
    {
        name: `Scuba Diving`,
        type: `water`,
        icon: `🐠`,
        description: `Discover underwater environments and marine ecosystems with qualified diving operators.`,
        location: `Fiji's reef areas`
    },
    {
        name: `Kayaking`,
        type: `water`,
        icon: `🛶`,
        description: `Paddle through calm coastal waters and enjoy a different view of Fiji's islands and shoreline.`,
        location: `Coastal areas`
    },
    {
        name: `Hiking`,
        type: `nature`,
        icon: `🥾`,
        description: `Explore trails through forests, hills, and natural landscapes while enjoying Fiji's tropical environment.`,
        location: `Viti Levu and other islands`
    },
    {
        name: `Waterfalls`,
        type: `nature`,
        icon: `💧`,
        description: `Visit tropical waterfalls and enjoy the scenery created by Fiji's lush forests and mountain areas.`,
        location: `Fiji's interior`
    },
    {
        name: `Village Experiences`,
        type: `culture`,
        icon: `🌺`,
        description: `Learn about Fijian community life, customs, food, and traditions through respectful cultural experiences.`,
        location: `Communities throughout Fiji`
    },
    {
        name: `Local Food`,
        type: `culture`,
        icon: `🍽️`,
        description: `Try local dishes and learn about ingredients and food traditions that are part of Fijian culture.`,
        location: `Across Fiji`
    },
    {
        name: `Beach Relaxation`,
        type: `relaxation`,
        icon: `🏝️`,
        description: `Slow down beside the ocean, enjoy tropical scenery, and spend time relaxing on Fiji's beaches.`,
        location: `Fiji's coastal areas`
    }
];

function setupNavigation() {
    const menuButton = document.querySelector(`#menu-button`);
    const siteNav = document.querySelector(`#site-nav`);

    if (menuButton && siteNav) {
        menuButton.addEventListener(`click`, () => {
            const isOpen = siteNav.classList.toggle(`open`);

            menuButton.setAttribute(`aria-expanded`, isOpen);

            if (isOpen) {
                menuButton.setAttribute(`aria-label`, `Close navigation menu`);
                menuButton.textContent = `✕`;
            } else {
                menuButton.setAttribute(`aria-label`, `Open navigation menu`);
                menuButton.textContent = `☰`;
            }
        });
    }
}

function updateYear() {
    const yearElement = document.querySelector(`#current-year`);

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

function createDestinationCard(destination) {
    return `
        <article class="destination-card">
            <img
                src="${destination.image}"
                alt="Scenery representing ${destination.name}"
                width="1000"
                height="650"
                loading="lazy">
            <div class="card-content">
                <p class="location">${destination.island}</p>
                <h3>${destination.name}</h3>
                <p>${destination.description}</p>
                <p><strong>Focus:</strong> ${destination.category}</p>
            </div>
        </article>
    `;
}

function displayFeaturedDestinations() {
    const featuredContainer = document.querySelector(`#featured-destinations`);

    if (featuredContainer) {
        const featuredDestinations = destinations.slice(0, 3);

        featuredContainer.innerHTML = featuredDestinations
            .map(createDestinationCard)
            .join(``);
    }
}

function displayDestinations(filter = `all`) {
    const destinationContainer = document.querySelector(`#destination-list`);
    const message = document.querySelector(`#destination-message`);

    if (!destinationContainer) {
        return;
    }

    const filteredDestinations = filter === `all`
        ? destinations
        : destinations.filter(destination => destination.type === filter);

    if (filteredDestinations.length === 0) {
        destinationContainer.innerHTML = ``;

        if (message) {
            message.hidden = false;
        }

        return;
    }

    if (message) {
        message.hidden = true;
    }

    destinationContainer.innerHTML = filteredDestinations
        .map(createDestinationCard)
        .join(``);
}

function setupDestinationFilter() {
    const filter = document.querySelector(`#destination-filter`);

    if (filter) {
        filter.addEventListener(`change`, event => {
            displayDestinations(event.target.value);
        });
    }
}

function createActivityCard(activity) {
    return `
        <article class="activity-card">
            <span class="activity-icon" aria-hidden="true">${activity.icon}</span>
            <h3>${activity.name}</h3>
            <p>${activity.description}</p>
            <p class="location">${activity.location}</p>
        </article>
    `;
}

function displayActivities(filter = `all`) {
    const activityContainer = document.querySelector(`#activity-list`);
    const message = document.querySelector(`#activity-message`);

    if (!activityContainer) {
        return;
    }

    const filteredActivities = filter === `all`
        ? activities
        : activities.filter(activity => activity.type === filter);

    if (filteredActivities.length === 0) {
        activityContainer.innerHTML = ``;

        if (message) {
            message.hidden = false;
        }

        return;
    }

    if (message) {
        message.hidden = true;
    }

    activityContainer.innerHTML = filteredActivities
        .map(createActivityCard)
        .join(``);
}

function setupActivityFilter() {
    const filter = document.querySelector(`#activity-filter`);

    if (filter) {
        filter.addEventListener(`change`, event => {
            displayActivities(event.target.value);
        });
    }
}

function saveVisitorPreference(name, interest) {
    const visitorPreference = {
        name: name,
        interest: interest
    };

    localStorage.setItem(`fijiExplorerVisitor`, JSON.stringify(visitorPreference));
}

function loadVisitorPreference() {
    const savedPreference = localStorage.getItem(`fijiExplorerVisitor`);

    if (!savedPreference) {
        return;
    }

    const preference = JSON.parse(savedPreference);
    const nameInput = document.querySelector(`#visitor-name`);
    const interestInput = document.querySelector(`#visitor-interest`);

    if (nameInput && preference.name) {
        nameInput.value = preference.name;
    }

    if (interestInput && preference.interest) {
        interestInput.value = preference.interest;
    }
}

function setupContactForm() {
    const form = document.querySelector(`#contact-form`);

    if (!form) {
        return;
    }

    loadVisitorPreference();

    form.addEventListener(`submit`, event => {
        event.preventDefault();

        const nameInput = document.querySelector(`#visitor-name`);
        const interestInput = document.querySelector(`#visitor-interest`);
        const savePreference = document.querySelector(`#save-preference`);
        const messageElement = document.querySelector(`#form-message`);

        const name = nameInput.value.trim();
        const interest = interestInput.value;

        if (name.length < 2 || interest === ``) {
            messageElement.textContent = `Please complete your name and select an interest before sending your message.`;
            messageElement.classList.remove(`success`);
            return;
        }

        if (savePreference.checked) {
            saveVisitorPreference(name, interest);
        }

        messageElement.textContent = `Thank you, ${name}! Your Fiji Explorer message has been received.`;
        messageElement.classList.add(`success`);

        form.reset();

        if (savePreference.checked) {
            loadVisitorPreference();
        }
    });
}

function initializeSite() {
    setupNavigation();
    updateYear();
    displayFeaturedDestinations();
    displayDestinations();
    setupDestinationFilter();
    displayActivities();
    setupActivityFilter();
    setupContactForm();
}

initializeSite();