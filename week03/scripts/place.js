// Dynamic footer dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Weather values (Metric °C & km/h)
const temperature = parseFloat(document.getElementById("temp").textContent);
const windSpeed = parseFloat(document.getElementById("wind").textContent);
const chillElement = document.getElementById("chill");

// Calculate Wind Chill for Metric units (°C, km/h)
const calculateWindChill = (temp, speed) => 
    (13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16))).toFixed(1);

// Viable condition check: temp <= 10 °C AND windSpeed > 4.8 km/h
if (temperature <= 10 && windSpeed > 4.8) {
    chillElement.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
    chillElement.textContent = "N/A";
}