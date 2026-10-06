let reviewCount = Number(localStorage.getItem("reviews")) || 0;

reviewCount += 1;

localStorage.setItem("reviews", reviewCount);

document.querySelector("#review-count").textContent = reviewCount;

document.querySelector("#currentyear").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modification: ${document.lastModified}`;