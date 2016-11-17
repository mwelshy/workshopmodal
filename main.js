
var modal = document.getElementById("myModal");
var span = document.getElementsByTagName("span")[1].addEventListener("click", closeit);

function displayit(){
	modal.style.display = "block";

}

function closeit() {
	modal.style.display = "none";
}


window.setTimeout(displayit, 3000);