const hamButton = document.querySelector('#toggleMenu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    hamButton.classList.toggle('open');

    //check if menu is open
    if (navigation.classList.contains('show')) {
        //change the content of hambutton to show green x mark
        hamButton.textContent = "❎";
    } else {
        //change the content of the hamButton to show the menu icon
        hamButton.textContent = "☰"
    }
});

// Event listener for clicks on links within the menu
document.querySelectorAll('.navigation a').forEach(link => {
    link.addEventListener('click', () => {
        // Close the menu after a link is clicked
        navigation.classList.remove('show');
        hamButton.classList.remove('open');

        //change the content of the hamButton to show menu icon
        hamButton.textContent = "☰"
    });
});

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Winter Quarters Nebraska",
        location: "Florence, Nebraska, United States",
        dedicated: "2001, April, 22",
        area: 16000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/winter-quarters-nebraska/400x250/winter-quarters-nebraska-temple-detail-772766.jpg"
      },
      {
        templeName: "The Hague Netherlands",
        location: "Zoetermeer, Netherlands",
        dedicated: "2019, September, 8",
        area: 10500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/the-hague-netherlands/2019/400x250/3-hague-netherlands-temple-1088316.jpg"
      },
      {
        templeName: "Cedar City Utah",
        location: "Cedar City, Utah, United States",
        dedicated: "2017, December, 10",
        area: 42657,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cedar-city-utah/400x225/Cedar-City-1978603.jpg"
      },
      {
        templeName: "Provo City Center",
        location: "Provo, Utah, United States",
        dedicated: "2016, March, 20",
        area: 85084,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/400x250/provo-city-center-temple-1572517-wallpaper.jpg"
      },
      {
        templeName: "Provo Utah",
        location: "Provo, Utah, United States",
        dedicated: "1972, February, 9",
        area: 130825,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-utah/400x250/provo-temple-lds-890642-wallpaper.jpg"
      }
  ];
// Function to display all temples
function displayAllTemples() {
    gridly.innerHTML = ''; // Clear the current display
  
    temples.forEach((temple) => {
      displayTemple(temple);
    });
  }
  
  // Function to display a single temple
  function displayTemple(temple) {
    const templeDiv = document.createElement("div");
    templeDiv.classList.add("temple");
  
    const templeImage = document.createElement("img");
    templeImage.src = temple.imageUrl;
    templeImage.alt = temple.templeName;
    templeImage.loading = "lazy"; // Lazy loading
  
    const templeInfo = document.createElement("div");
    templeInfo.classList.add("temple-info");
  
    const templeName = document.createElement("h3");
    templeName.textContent = temple.templeName;
  
    const location = document.createElement("p");
    location.textContent = `Location: ${temple.location}`;
  
    const dedicated = document.createElement("p");
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;
  
    const area = document.createElement("p");
    area.textContent = `Area: ${temple.area} square feet`;
  
    templeInfo.appendChild(templeName);
    templeInfo.appendChild(location);
    templeInfo.appendChild(dedicated);
    templeInfo.appendChild(area);
  
    templeDiv.appendChild(templeImage);
    templeDiv.appendChild(templeInfo);
  
    gridly.appendChild(templeDiv);
  }
  
  // Event listeners for navigation menu items
  document.getElementById("menu").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default behavior of links
  
    const target = event.target;
    const id = target.id;
  
    switch (id) {
      case "old":
        displayOldTemples();
        break;
      case "new":
        displayNewTemples();
        break;
      case "large":
        displayLargeTemples();
        break;
      case "small":
        displaySmallTemples();
        break;
      default:
        displayAllTemples();
    }
  });
  
  // Function to filter and display old temples
  function displayOldTemples() {
    gridly.innerHTML = ''; // Clear the current display
  
    temples.forEach((temple) => {
      if (parseInt(temple.dedicated.split(',')[0]) < 1900) {
        displayTemple(temple);
      }
    });
  }
  
  // Function to filter and display new temples
  function displayNewTemples() {
    gridly.innerHTML = ''; // Clear the current display
  
    temples.forEach((temple) => {
      if (parseInt(temple.dedicated.split(',')[0]) > 2000) {
        displayTemple(temple);
      }
    });
  }
  
  // Function to filter and display large temples
  function displayLargeTemples() {
    gridly.innerHTML = ''; // Clear the current display
  
    temples.forEach((temple) => {
      if (temple.area > 90000) {
        displayTemple(temple);
      }
    });
  }
  
  // Function to filter and display small temples
  function displaySmallTemples() {
    gridly.innerHTML = ''; // Clear the current display
  
    temples.forEach((temple) => {
      if (temple.area < 10000) {
        displayTemple(temple);
      }
    });
  }
  
  // Initially display all temples
  displayAllTemples();