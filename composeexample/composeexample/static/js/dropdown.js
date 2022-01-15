var y = document.getElementById("location");
var temper = document.getElementById("temp");
var type = document.getElementById("titles");
var selector = document.getElementById("ddlViewBy");

window.onload=function(){
getWeatherLocation ();
generateList();
}
function getWeatherLocation () {
  // (A) GET FROM SESSION
  var weather_data_obj = JSON.parse(sessionStorage.getItem("first")),
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

function generateList(){
    var city_list = JSON.parse(sessionStorage.getItem("cityList"))
    console.log(city_list)
    listItemDropdown(city_list)
}

function listItemDropdown(item){
    console.log(typeof item)
  for (var i = 0; i < item.length; i++){
    console.log(item[i]["Name"])
    var list = item[i]["Name"];
//    console.log(list);
//    list = document.createElement("LI");
    var option_node = document.createElement("option");
    var textnode = document.createTextNode(list);
    option_node.appendChild(textnode);
    option_node.setAttribute('id',item[i]["id"]);
    document.getElementById("ddlViewBy").appendChild(option_node);


  }
 }

function Delete(){
var userOption_id = selector.options[selector.selectedIndex].id;
var userOption_text = selector.options[selector.selectedIndex].text;
var info = {
"id":userOption_id,
"Name":userOption_text
};
var api_r = DeleteScript(info)
var city_table_obj = JSON.parse(api_r);
console.log(city_table_obj)
    if(city_table_obj.error == undefined){
        error.textContent = city_table_obj.r
        error.style.color = "black"
    }else{
        error.textContent = city_table_obj.error
        error.style.color = "red"
    }

}

function DeleteScript(input){
    var jqXHR = $.ajax({
            type: "DELETE",
            url: "/web_app/remove_city",
            async: false,
            data: JSON.stringify(input),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
        });

        return jqXHR.responseText;
    }


