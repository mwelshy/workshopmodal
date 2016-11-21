//  selects modal


var modal = document.getElementById("myModal");

//  adds functionality to X 
var span = document.getElementsByTagName("span")[1].addEventListener("click", closeit);


//  shows the modal in display: block
function displayit(){
	modal.style.display = "block";

}

// allows X to display: none
function closeit() {
	modal.style.display = "none";
}


//  gives a 3 second delay on the page before the modal opens. 
window.setTimeout(displayit, 3000);

