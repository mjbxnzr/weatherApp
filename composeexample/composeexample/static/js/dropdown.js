var y = document.getElementById("location");
var temper = document.getElementById("temp");
var type = document.getElementById("titles");

window.onload=function(){
getWeatherLocation ();
}
function getWeatherLocation () {
  // (A) GET FROM SESSION
  var weather_data_obj = JSON.parse(sessionStorage.getItem("weatherLocationData")),
      // JSON parse to turn stored sting back into array
      second = JSON.parse(sessionStorage.getItem("second"));

  // (B) IT WORKS!
  // Manually opening 1b-session.html will not work though
  // Session data will perish once tab/window is closed
//  console.log(weather_data_obj["location"]); // Foo Bar
//  console.log(second); // ["Hello", "World"]
  y.innerHTML = `<strong>${weather_data_obj["location"]}, ${weather_data_obj["country"]}</strong>
                <p>Current Location</p>`;

  temper.innerHTML = `<strong>${weather_data_obj["temp"]}°<sup>C</sup></strong>
                <p>Temperature</p>`;

  type.innerHTML = `${weather_data_obj["weather_type"]}`;
  document.getElementById("icon_weather").src = "http://openweathermap.org/img/wn/"+weather_data_obj["icon"]+"@2x.png"

  // (EXTRA) TO CLEAR
  // sessionStorage.removeItem("KEY");
  // sessionStorage.clear();
}