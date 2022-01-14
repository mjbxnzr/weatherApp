 function Validate(){
//    console.log(Array.from(document.querySelectorAll('#createCityForm input')).reduce((acc, input) => ({ ...acc,[input.id]:input.value}),{}));
//    return false;
    var name = document.getElementById("id_Name").value;
    var authEmail = document.getElementById("id_AuthorEmail").value;

    var request_info = {

            "Name":name,
            "AuthorEmail": authEmail
  };
    console.log('masuk sini')
//    input = Array.from(document.querySelectorAll('#createCityForm input')).reduce((acc, input) => ({ ...acc,[input.id]:input.value}),{});
    var jqXHR = $.ajax({
            type: "POST",
            url: "/web_app/add_city",
            async: false,
            data: JSON.stringify(request_info),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
        });

        return jqXHR.responseText;
  }