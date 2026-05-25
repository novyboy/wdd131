const temperature = 75;
const windSpeed = 7;
function calculateWindChill(temperature, windSpeed) {//fahrenheit
	const v16 = windSpeed ** 0.16;
	const windChill = 35.74 + 
	0.6215 * temperature -
	35.75 * v16 +
	0.4275 * temperature * v16;
	return windChill;
}
if (temperature <= 50 && windSpeed > 3) {
	const windChill = calculateWindChill(temperature, windSpeed);
	document.getElementById("windChill").innerHtml = windChill;
}