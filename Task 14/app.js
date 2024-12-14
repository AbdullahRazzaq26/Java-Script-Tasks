var userInput = prompt("Enter Your Number")

var roundNum = Math.round (userInput)
var floorNum = Math.floor (userInput)
var ceilNum = Math.ceil (userInput)


console.log(userInput);
console.log(roundNum);
console.log(ceilNum);
console.log(floorNum);


document.write("User Value = " + userInput + "</br>");
document.write("Round Value = " + roundNum + "</br>");
document.write("Ceil Value = " + ceilNum + "</br>");
document.write("Floor Value = " + floorNum + "</br>");