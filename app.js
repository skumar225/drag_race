//Reset to pre-staging lights at the beginning 
var Christmastree = function () {
	this.prestageLights = getElementById("prestage-tree");

	this.reset();
};

//RESET Callback Function
Christmastree.prototype.reset = function () {
	this.prestageLights = "on";
};

//stageOn prototype 

// Christmastree.prototype.stageOn = function () {
// 	document.getElementById("a").setAttribute("class","stageyellow");
// 	document.getElementById("b").setAttribute("class","stageyellow");
// 	document.getElementById("c").setAttribute("class","stageyellow");
// 	document.getElementById("d").setAttribute("class","stageyellow");
// 	// stagingLights.setAttribute("color", turnGreen());

// 	// function turnGreen (event) {
// 	// 		event.target.style.backgroundColor = "green";

// 	// 	}
// };

//New instance 
// 	

var counter = 0;






//Player input
var car = document.getElementById("car");
car.style.left = "20px";
console.log(car);
window.addEventListener("keydown", function (event) {
	// var self = this;

	if (event.keyCode === 13) {
		car.state = "on";
		document.getElementById("a").setAttribute("class", "start");
		document.getElementById("b").setAttribute("class", "start");
		document.getElementById("c").setAttribute("class", "start");
		document.getElementById("d").setAttribute("class", "start");
			
	}

	if (event.keyCode === 39) {
		car.style.left = parseInt(car.style.left, 10) + 15 + "px";
		counter++;
		console.log("counter is " + counter);

	if (counter === 7)  {
 		
 		document.getElementById("e").setAttribute("class", "start");
 		document.getElementById("f").setAttribute("class", "start");
 		document.getElementById("g").setAttribute("class", "start");
 		document.getElementById("h").setAttribute("class", "start");
		}
	}
});
	 // if (counter === 8) {
	 // 		var startLights;
 
		// 	function changeColor() {
  // 				startLights = setInterval(lightChange, 500);
		// 	}
		// 	console.log("the counter equals" + counter);
 
		// 	function lightChange() {
  // 				var lights = document.getElementById("i");
  // 				lights.style.color == "yellow";
		// 	}
 
		// 	function stopTextColor() {
  // 				clearInterval(startLights);
		// 	}
		//   }

	 // 	}
 

 	// 	this.christmastree.stageOn();
 	// 	console.log("works");

 	// }









//Player starting point

// var Player = function () {
// 	this.playerOne = getElementById("car");
// 	this.playerOne.style.left = "0px";
// };


// // var counter = "0px";
// //When car reaches 120px, staging lights turn on
// function stage () {
// 	if (Player === "120px") {
// 			counter += Player;
// 			alert("staging");
// 	}
// }
// var stagingLights = getElementById("stage-tree");
// stagingLights.addEventListener("", setInterval(););

//Pre-staging

//2. Car state should be = 'off' before DIV 1
//////if #car is located before div 1, then player cannot move



//Staging 
// . Second lights row = 'on'

/*
3. Set interval function
///setInterval 
4. Car moves into staging >> notify instructions
5. Car move across the 2nd div line
6. IF before main lights are on >> notify alert "YOU LOSE" and reset option
7. IF start at right lights, notify GO and race*/



//Finish

// 1. Event listener when 3rd div is passed, alert YOU WON! YAYYYY
// 2. Reset Button.