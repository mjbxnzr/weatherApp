var y = document.getElementById("location");
var temper = document.getElementById("temp");
var type = document.getElementById("titles");



function main_getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(main_showPosition);
  } else {
    y.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(main_showPosition);
  } else {
    y.innerHTML = "Geolocation is not supported by this browser.";
  }
}


function main_showPosition(position) {
  var info = {

  "latitude":position.coords.latitude,
  "longitude": position.coords.longitude
  };
  weather_data = runPyScript(info)
  const weather_data_obj = JSON.parse(weather_data)
  store(weather_data_obj,"weatherLocation")
  y.innerHTML = `<strong>${weather_data_obj["location"]}, ${weather_data_obj["country"]}</strong>
                <p>Current Location</p>`;

  temper.innerHTML = `<strong>${weather_data_obj["temp"]}°<sup>C</sup></strong>
                <p>Temperature</p>`;

  type.innerHTML = `${weather_data_obj["weather_type"]}`;
  document.getElementById("icon_weather").src = "http://openweathermap.org/img/wn/"+weather_data_obj["icon"]+"@2x.png"


}

function showPosition(position) {
  var info = {

  "latitude":position.coords.latitude,
  "longitude": position.coords.longitude
  };
  weather_data = runPyScript(info)
  const weather_data_obj = JSON.parse(weather_data)
//  store(weatherLocationData)
  y.innerHTML = `<strong>${weather_data_obj["location"]}, ${weather_data_obj["country"]}</strong>
                <p>Current Location</p>`;

  temper.innerHTML = `<strong>${weather_data_obj["temp"]}°<sup>C</sup></strong>
                <p>Temperature</p>`;

  type.innerHTML = `${weather_data_obj["weather_type"]}`;
  document.getElementById("icon_weather").src = "http://openweathermap.org/img/wn/"+weather_data_obj["icon"]+"@2x.png"


}

function runPyScript(input){
        console.log(input)
        var jqXHR = $.ajax({
            type: "POST",
            url: "/web_app/get_weather",
            async: false,
            data: JSON.stringify(input),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
        });

        return jqXHR.responseText;
    }


function getLocationByCityName(input){
    var info = {
    'city':input
    }
  weather_data = runLocationByCityName(info)
  const weather_data_obj = JSON.parse(weather_data)
  store(weather_data_obj)
  y.innerHTML = `<strong>${weather_data_obj["location"]}, ${weather_data_obj["country"]}</strong>
                <p>Current Location</p>`;

  temper.innerHTML = `<strong>${weather_data_obj["temp"]}°<sup>C</sup></strong>
                <p>Temperature</p>`;

  type.innerHTML = `${weather_data_obj["weather_type"]}`;
  document.getElementById("icon_weather").src = "http://openweathermap.org/img/wn/"+weather_data_obj["icon"]+"@2x.png"


}

function runLocationByCityName(input){

    var jqXHR = $.ajax({
            type: "POST",
            url: "/web_app/get_weather/by_city_name",
            async: false,
            data: JSON.stringify(input),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
        });

       return jqXHR.responseText;
}