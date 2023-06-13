const apiKey = "3eaa689a782df0b4abf4ac13f0216270";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon')
const buttonCity = document.querySelector('.button-city')
const paris = document.querySelector('#paris')
const madrid = document.querySelector('#madrid')
const tokyo = document.querySelector('#tokyo')
const ny = document.querySelector('#ny')
const la = document.querySelector('#la')


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {

        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = "none";
    } else {
        let data = await response.json();


        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/images/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/images/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/images/drizzle.png";
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/images/snow.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/images/mist.png";
        }

        document.querySelector('.weather').style.display = "block";
        document.querySelector('.error').style.display = "none";

    }

}


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
paris.addEventListener("click", () => {
    checkWeather("Paris");
});
madrid.addEventListener("click", () => {
    checkWeather("Madrid");
});
tokyo.addEventListener("click", () => {
    checkWeather("Tokyo");
});
 ny.addEventListener("click", () => {
    checkWeather("New York");
});
 la.addEventListener("click", () => {
    checkWeather("Los Angeles");
})


checkWeather();