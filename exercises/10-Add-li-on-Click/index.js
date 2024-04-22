let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	// Your code here
	let elem = document.createElement("li");
	elem.innerHTML = "Forth element"
	document.querySelector("#myList").appendChild(elem);

});
