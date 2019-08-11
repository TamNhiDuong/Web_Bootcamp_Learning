//After everything is ok, set up colour to be random by using new function!!!
var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
//Pick color
//var pickedColor = colors[3]; 
//Picking random color
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");
//Optimizing and shorting the code
for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function () {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		//this.textContent ==="Easy" ? numSquares = 3: numSquares = 6;
		if (this.textContent === "Easy") {
			numSquares = 3;
		}
		else {
			numSquares = 6;
		}
		reset();
		//figure how many squares
		//pick new colors
		//pick a new Picked color
		//update page to reflect changes
	});
}

function reset() {
	//Display 
	messageDisplay.textContent = "";
	resetButton.textContent = "New color"
		//Generate all new color
	colors = generateRandomColors(numSquares);
	//Pick a new target color from the array
	pickedColor = pickColor();
	//Display the picked color
	colorDisplay.textContent = pickedColor;
	//change color of square
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "#steelblue";
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		}
		else {
			squares[i].style.display = "none";
		}
	}
}
//easyBtn.addEventListener("click", function(){
//easyBtn.classList.add("selected");
//hardBtn.classList.remove("selected");
//numSquares = 3;
//colors = generateRandomColors(numSquares);
//pickedColor = pickColor();
//colorDisplay.textContent = pickedColor;
//Display 3 first colors
//for (var i =0; i < squares.length; i++){
//if(colors[i]){
//squares[i].style.background= colors[i];
//}
//else{
//	squares[i].style.display = "none"; 
//}
//}
//});
//hardBtn.addEventListener("click", function(){
//hardBtn.classList.add("selected");
//easyBtn.classList.remove("selected");
//numSquares = 6;
//colors = generateRandomColors(numSquares);
//pickedColor = pickColor();
//colorDisplay.textContent = pickedColor;
//Display 6 first colors
//for (var i =0; i < squares.length; i++){
//squares[i].style.background= colors[i];
//squares[i].style.display = "block"; 
//}
//});
//Reset game button
resetButton.addEventListener("click", function () {
	reset();
})
colorDisplay.textContent = pickedColor;
//Loop through all colors
//CODES RUN WHEN USER WIN GAME
for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	//Adding click Listener to Each squares
	squares[i].addEventListener("click", function () {
		//Grab color of clicked square, "This refer to the one that we clicked
		var clickedColor = this.style.backgroundColor;
		//Compare grabbed color with the picked one
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?"
			changeColors(clickedColor);
			h1.style.background = pickedColor;
		}
		else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!";
		}
	});
}
//Change all colors when clicking correct color
function changeColors(color) {
	//Loop through all colors to match picked color
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	//Pick Random NUMBER
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//Create new array
	var arr = [];
	//Generate random colors by given num
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	//Return Array
	return arr;
}
//=====>Generate each random color trong he RGB
function randomColor() {
	//Pick Red
	var r = Math.floor(Math.random() * 255 + 1);
	//Pick Green
	var g = Math.floor(Math.random() * 255 + 1);
	//Pick Blue
	var b = Math.floor(Math.random() * 255 + 1);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}