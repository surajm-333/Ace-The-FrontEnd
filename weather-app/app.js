let date = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tueusday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let month = months[date.getMonth()];
let day = days[date.getDay()];
let todayDate = date.getDate();
let year = date.getFullYear();

let dateName = document.querySelector("#date-dayname");
dateName.innerHTML = `${day}`;

let datePrint = document.querySelector("#date-day");
datePrint.innerHTML = `${todayDate} ${month},&nbsp; ${year}`;

function getTemp(response) {
  let temperature = Math.round(response.data.main.temp);
  console.log(response.data);
  let currentTemp = document.querySelector("#current-temp");
  currentTemp.innerHTML = temperature;
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#country").innerHTML = response.data.sys.country;
  document.querySelector("#weather-desc").innerHTML =
    response.data.weather[0].main;
  document.querySelector("#max-temp").innerHTML = Math.round(
    response.data.main.temp_max
  );
  document.querySelector("#min-temp").innerHTML = Math.round(
    response.data.main.temp_min
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#pressure").innerHTML = response.data.main.pressure;
  document.querySelector("#feels-like").innerHTML = Math.round(
    response.data.main.feels_like
  );
  document.querySelector("#clouds").innerHTML = response.data.clouds.all;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}

function getLocation() {
  let city = prompt("What's your location?");
  displayCity(city);
}

displayCity("New Delhi");

function displayCity(city) {
  let apiKey = "2fa9ddec71ce08d23a59a79b1d873ee1";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(getTemp);
}
