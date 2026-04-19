// DOM Elements

const input = document.getElementById("cityInput");
const button = document.getElementById("searchBtn");
const errorText = document.getElementById("eroroMsg");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const time = document.getElementById("time");
const card = document.getElementById("weatherCard");

const suggestionsEl = document.getElementById("suggestions");


input.addEventListener("input", fetchSuggestion);
button.addEventListener("click", fetchSuggestion);

async function fetchSuggestion() {
    suggestionsEl.innerHTML = "";
    card.classList.add('hidden');
    showLoading();

    const query = input.value.trim();

    if(!query) {
        errorText.innerHTML = "Bro..No city entered..";
        card.classList.add('hidden');
        hideLoading();
        return;
    }
    errorText.innerHTML = "";

    const resp = await fetch("https://geocoding-api.open-meteo.com/v1/search?name=" + query + "&count=5");
    const data = await resp.json();
    renderCitiesList(data.results);
    
    // const city = data.results[0];
    // getWeatherByCoords(city);
}

async function getWeatherByCoords(city) {

    const {name, country, latitude, longitude} = city;

    const resp = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
    const data = await resp.json()
    const current_weather = data.current_weather;
    
    cityName.textContent = `${name}, ${country}`;
    temperature.textContent = `${current_weather.temperature} °C`;
    time.textContent = `${current_weather.time} UTC`;

    hideLoading();
    card.classList.remove('hidden');
}

function renderCitiesList (cities) {
    if (!cities || cities.length == 0) {
        const li = document.createElement('li');
        li.textContent = "No cities found..!";
        suggestionsEl.appendChild(li);
        hideLoading();
        return;
    }

    cities.forEach(city => {
        const li = document.createElement('li');
        li.textContent = `${city.name}, ${city.country}`;
        li.addEventListener("click", () => {
            input.value = `${city.name}, ${city.country}`;
            suggestionsEl.innerHTML = "";
            getWeatherByCoords(city);
        })

        suggestionsEl.appendChild(li);
    });
}

function showLoading() {
    button.disabled = true;
    button.textContent = "Loading...";
}

function hideLoading() {
    button.disabled = false;
    button.textContent = "Search";
}