const API_KEY = "9e05a9af867a485da100e48bc6c8cb0e";
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather";

const clouds = document.getElementById("clouds");
const wind = document.getElementById("wind");
const description = document.getElementById("description");
const img = document.getElementById("weatherIcon");
const area = document.getElementById("area");
const humidity = document.getElementById("humidity");
const temp = document.getElementById("temp");

async function getWeather(url) {
  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      area.innerText = `검색지역: ${data.name}`;
      clouds.innerText = `흐림 정도: ${data.clouds.all}%`;
      wind.innerText = `풍속: ${data.wind.speed}m/s`;
      description.innerText = `날씨: ${data.weather[0].description}`;
      humidity.innerText = `습도: ${data.main.humidity}`;
      temp.innerText = `기온: ${data.main.temp}`;

      // 날씨 아이콘
      const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      img.src = url;
    });
}

// 도시 검색해서 추가
function getWeatherUrl(city, key = API_KEY) {
  return `${BASE_URL}?q=${city}&appid=${key}&units=metric&lang=kr`;
}

// 입력한 도시의 날씨 정보가져옴
function search() {
  const cityName = document.querySelector("#cityName").value;
  getWeather(getWeatherUrl(cityName));
  document.querySelector("#cityName").value = null;
}

//Enter
const input = document.querySelector("#cityName");
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    search();
  }
});
