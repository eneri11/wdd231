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


function displayCurrentWeather(data) {

    const currentTemp =
        document.querySelector("#current-temp");

    const description =
        document.querySelector("#weather-description");

    const current = data.list[0];

    currentTemp.textContent =
        `${Math.round(current.main.temp)}°C`;

    description.textContent =
        current.weather[0].description;
}

function displayForecast(data) {

    const forecast =
        document.querySelector("#forecast");

    forecast.innerHTML = "";

    // Forecast every 24 hours (8 entries × 3 hours)
    const days = [8, 16, 24];

    days.forEach(index => {

        const item = data.list[index];

        const date = new Date(item.dt_txt);

        const day = date.toLocaleDateString("en-US", {
            weekday: "short"
        });

        const div = document.createElement("div");

        div.classList.add("forecast-day");

        div.innerHTML = `
            <strong>${day}</strong> :
            ${Math.round(item.main.temp)}°C
        `;

        forecast.appendChild(div);

    });

}