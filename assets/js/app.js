const apiKey = "9742309e85f7cae376f357f0dd261c6d"
const tempInfo = document.querySelector('#temp-info');
const cityName = document.querySelector('#city-name');
const weatherStatus = document.querySelector('#weather-status');
const infoDiv = document.querySelector('#info-div');
const formEl = document.querySelector('#form-el');
const inputEl = document.querySelector('#input-el');
const pEl = document.querySelector('p');


function UIinfo(n){
    tempInfo.innerHTML = `
        <h2 class="temp-info" id="temp-info">
            ${Math.round(n.main.temp)}°C
        </h2>
    `
    inputEl.value = ""
    cityName.innerHTML = `
        <h2 class="city-name" id="city-name">
            ${n.name}
        </h2>
    `
    weatherStatus.innerHTML = `
        <h2 class="weather-status" id="weather-status">
            ${n.weather[0].description}
        </h2>
    `
    pEl.innerHTML = "--"
}

formEl.addEventListener("submit" , (e) => {
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputEl.value}&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(n => UIinfo(n))

    
})

