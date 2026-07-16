const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
const lat = 'YOUR_LATITUDE';
const lon = 'YOUR_LONGITUDE';

// Current Weather URL
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
// 3-Day Forecast URL 
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

async function fetchWeather() {
  try {
    // 1. Fetch Current Weather
    const response = await fetch(currentWeatherUrl);
    const data = await response.json();
    
    document.getElementById('weather-info').innerHTML = `
      <p>Temperature: <strong>${Math.round(data.main.temp)}°F</strong></p>
      <p>Condition: ${data.weather[0].description}</p>
    `;

    // 2. Fetch 3-Day Forecast
    const forecastResponse = await fetch(forecastUrl);
    const forecastData = await forecastResponse.json();
    
    // OpenWeatherMap gives 5-day forecasts in 3-hour increments. 
    // Filter to get roughly one reading per day (every 24 hours / 8 slots)
    const dailyForecasts = forecastData.list.filter((item, index) => index % 8 === 0).slice(0, 3);
    
    let forecastHTML = '';
    dailyForecasts.forEach(day => {
      const date = new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' });
      forecastHTML += `<p>${date}: <strong>${Math.round(day.main.temp)}°F</strong> - ${day.weather[0].description}</p>`;
    });
    
    document.getElementById('forecast-info').innerHTML = forecastHTML;

  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

fetchWeather();