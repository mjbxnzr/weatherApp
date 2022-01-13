var y = document.getElementById("location");
var temper = document.getElementById("temp");
var type = document.getElementById("titles");



function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    y.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  var info = {

  "latitude":position.coords.latitude,
  "longitude": position.coords.longitude
  };
  weather_data = runPyScript(info)
  const weather_data_obj = JSON.parse(weather_data)
  console.log(weather_data_obj)
  console.log(weather_data_obj["temp"])
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