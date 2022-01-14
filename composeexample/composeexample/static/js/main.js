
//function click_category(){
//    $("ul li a.active").removeClass("active");
//    $(this).addClass("active");
//}
var url = window.location.origin;

$("li a").click(function() {

			// Select all list items
			var listItems = $("li a");

			// Remove 'active' tag for all list items
			for (let i = 0; i < listItems.length; i++) {
				listItems[i].classList.remove("active");
			}

			// Add 'active' tag for currently selected item
			this.classList.add("active");
		});
window.onload=function(){
getLocation();
getCityList();
}

function getCityList(){
        var jqXHR = $.ajax({
            type: "GET",
            url: "/web_app/cityList",
            async: false,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
        });
        listItem(JSON.parse(jqXHR.responseText))
        return jqXHR.responseText;

}

function listItem(item){
    console.log(typeof item)
  for (var i = 0; i < item.length; i++){
    console.log(item[i]["Name"])
    var list = item[i]["Name"];
    console.log(list);
//    list = document.createElement("LI");
    var li_node = document.createElement("LI");
    var a_node = document.createElement("p");
    var i_node = document.createElement("i")
    var textnode = document.createTextNode(list);

    li_node.className = "ui-item green";
    li_node.appendChild(i_node);
    i_node.appendChild(a_node);
    a_node.appendChild(textnode);
    document.getElementById('id-ui-list').appendChild(li_node);


  }
 }