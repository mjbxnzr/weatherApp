 function Validate(){
//    console.log(Array.from(document.querySelectorAll('#createCityForm input')).reduce((acc, input) => ({ ...acc,[input.id]:input.value}),{}));
//    return false;
    var name = document.getElementById("id_Name").value;
    var authEmail = document.getElementById("id_AuthorEmail").value;
    var error = document.getElementById("error");

    var request_info = {

            "Name":name,
            "AuthorEmail": authEmail
  };
//    input = Array.from(document.querySelectorAll('#createCityForm input')).reduce((acc, input) => ({ ...acc,[input.id]:input.value}),{});
    var jqXHR = $.ajax({
            type: "POST",
            url: "/web_app/add_city",
            async: false,
            data: JSON.stringify(request_info),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
        });
    var city_table_obj = JSON.parse(jqXHR.responseText);
    if(city_table_obj.error == undefined){
        error.textContent = city_table_obj.r
        error.style.color = "black"
    }else{
        error.textContent = city_table_obj.error
        error.style.color = "red"
    }
        return jqXHR.responseText;
  }