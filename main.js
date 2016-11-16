// // var modal = document.getElementById("myModal");
// document.getElementById("myBtn").addEventListener("click", displayit);


var modal = document.getElementById("myModal");
var span = document.getElementsByTagName("span")[0].addEventListener("click", closeit);

function displayit(){

	// var modal = document.getElementById("myModal");
	modal.style.display = "block";

}

function closeit() {
	modal.style.display = "none";
}


window.setTimeout(displayit, 3000);