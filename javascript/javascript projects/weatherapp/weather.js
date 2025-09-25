const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const weatherDisplay = document.getElementById('weather-display');
const cityNameDisplay = document.getElementById('cityName');
const temperatureDisplay = document.getElementById('temperature');
const conditionsDisplay = document.getElementById('conditions');
const weatherIcon = document.getElementById('weatherIcon');

const api = "";

async function getWeather(city) {
    if (!city){
        alert("Please enter a city name!")
        return;
    }
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const res = await fetch(apiUrl)
        if (!res.ok) {
            alert("City not found!")
            return
        }
        const data = await res.json()
        displayWeather(data)
    } catch (error) {
        console.error("Error: ",error)
        alert("Something went wrong")
    }
}

const displayWheather = (data) => {
    const {name: cityName, main: {temp}, weather: [weatherInfo]} = data;
    const {description,icon} = weatherInfo
    cityNameDisplay.textContent = cityName;
    temperatureDisplay.textContent = `${Math.round(temp)}°C`;
    conditionsDisplay.textContent = description;
    weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    weatherIcon.alt = description;

    weatherDisplay.classList.remove('hidden');
}

searchBtn.addEventListener('click', () => {
    getWeather(cityInput.value.trim());
});

cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        getWeather(cityInput.value.trim());
    }
});