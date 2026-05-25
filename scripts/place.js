const temperature = 75;
const windSpeed = 7;
const calculateWindChill = (temperature, windSpeed) => 35.74 + 0.6215 * temperature - 35.75 * windSpeed ** 0.16 + 0.4275 * temperature * windSpeed ** 0.16;

document.getElementById("temperature").innerText = `${temperature}°F`;
document.getElementById("conditions").innerText = "Sunny";
document.getElementById("windSpeed").innerText = `${windSpeed}mph`;
const windChill = (temperature <= 50 && windSpeed > 3) ? `${calculateWindChill(temperature, windSpeed)}°F` : "N/A";
document.getElementById("windChill").innerText = windChill;