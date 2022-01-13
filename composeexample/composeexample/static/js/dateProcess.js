var x = document.getElementById("date");
var currentdate = new Date();
//var datetime = currentdate.toString("MMMM yyyy");

const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "OCt", "Nov", "Dec"];
let current_datetime = new Date()
let formatted_date = current_datetime.getDate() + " " + months[current_datetime.getMonth()] + " " + current_datetime.getFullYear()


x.innerHTML = formatted_date