var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

// This custom function checks for the length of the input the user gives
function inputLength() {
	return input.value.length;
}

// This custom function adds the new item to the list
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

// This custom function checks if user clicked the enter button on the screen
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	} 

}

// This custom function checks if user hit the enter key on the keyboard which has the key code of 13
function addListAfterKeypress(event1) {
	if (inputLength() > 0 && event1.keyCode === 13) {
		createListElement();
	}
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);












var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

console.log(body);
console.log(css);


// This custom function changes the background colors to what user selects
function setGradient() {
	body.style.background = 
		"linear-gradient(to right, "
		+ color1.value  
		+ ", " 
		+ color2.value 
		+ ")";

		css.textContent = body.style.background + ";";


}


	
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);










