
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