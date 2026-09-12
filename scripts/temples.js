javascript

const currentYear = new Date().getFullYear();

document.querySelector("#currentyear").textContent = currentYear;


document.querySelector("#lastModified").textContent =
    `Last Modification: ${document.lastModified}`;



const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");

    menuButton.textContent = isOpen ? "✕" : "☰";

    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});
