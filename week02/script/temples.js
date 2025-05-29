

const menuItems = document.querySelectorAll(".menu a");
const heading = document.getElementById("heading");

menuItems.forEach(item => {
    item.addEventListener('click', function (event) {
        // Prevent default link behavior
        event.preventDefault();

        const title = item.getAttribute('data-title');
        heading.textContent = title;

const hamButton = document.getElementById('button');
const navigation = document.querySelector('.menu');

hamButton.addEventListener ('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});
