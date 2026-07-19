// =====================================
// Manila Weather
// =====================================

// Replace this with your own API key
const apiKey = "ffed040e65737e5a1af1745dd55f3ea5";

// Manila Coordinates
const lat = 14.5995;
const lon = 120.9842;

// Metric = Celsius
const weatherURL =
`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function getWeather() {

    try {

        const response = await fetch(weatherURL);

        if (!response.ok) {
            throw new Error("Weather data not available.");
        }

        const data = await response.json();

        displayCurrentWeather(data);
        displayForecast(data);

    } catch (error) {

        console.error(error);

    }

}

getWeather();