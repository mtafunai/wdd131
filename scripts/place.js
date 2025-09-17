// Footer date info
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Wind Chill Calculation
function calculateWindChill(tempC, windKmh) {
  // Formula for Celsius: 13.12 + 0.6215T - 11.37V^0.16 + 0.3965TV^0.16
  return (
    13.12 +
    0.6215 * tempC -
    11.37 * Math.pow(windKmh, 0.16) +
    0.3965 * tempC * Math.pow(windKmh, 0.16)
  ).toFixed(1);
}

const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);

let windChill = "N/A";
if (temp <= 10 && wind > 4.8) {
  windChill = calculateWindChill(temp, wind) + " °C";
}

document.getElementById("windchill").textContent = windChill;
