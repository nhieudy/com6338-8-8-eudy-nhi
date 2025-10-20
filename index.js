// Your code here
var form = document.querySelector("form");
var section = document.getElementById("weather");

//get the data from open weather map
var URL =
  "https://api.openweathermap.org/data/2.5/weather?units=imperial&appid=61ac71fca852832313e86693bf383076&q=";
form.onsubmit = function (e) {
  e.preventDefault();
  var city = this.search.value;
  fetch(URL + city)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      displayWeather(data);
      console.log(data);
    })
    .catch(function (err){
     var wrong = document.createElement("h2");
  wrong.textContent = "Location not found"
  section.appendChild(wrong);
    })
};

function displayWeather(data) {
  form.reset();
  section.innerHTML = ''
  console.log(data.name);
  console.log(data.sys.country);

  //Create the H2
  var h2 = document.createElement("h2");
  h2.textContent = data.name + ", " + data.sys.country;
  section.appendChild(h2);

  //Create the a href to google maps
  var a = document.createElement("a");
  a.textContent = "Click to view map";
  a.href =
    "https://www.google.com/maps/search/?api=1&query=" +
    data.coord.lat +
    "," +
    data.coord.lon;
  section.appendChild(a);

  //Create weather icon
  var icon = document.createElement("img");
  icon.src =
    "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
  section.appendChild(icon);

  //Create description
  var description = document.createElement("p");
  description.textContent = data.weather[0].description;
  description.style.textTransform = "capitalize";
  section.appendChild(description);

  //Create actual like
  var temp = document.createElement("p");
  temp.textContent = "Current: " + data.main.temp;
  section.appendChild(temp);

  //Create feel like
  var feelTemp = document.createElement("p");
  feelTemp.textContent = "Feels like: " + data.main.feels_like;
  section.appendChild(feelTemp);

  //Create Time
  var timeCollect = document.createElement("p");
  var date = new Date(data.dt * 1000); //Multiplay to get to milliseconds
  var timeString = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
  timeCollect.textContent = "Last updated: " + timeString;
  section.appendChild(timeCollect);
}
