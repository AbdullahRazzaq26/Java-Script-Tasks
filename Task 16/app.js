var number = Math.round(Math.random()*10)
var attempts = 3


for (let index = 0; index < attempts; index++) {

var userInput = prompt ("Enter The Number")

    
    if (userInput == number) {
        
        alert("Congrats, You Got The Number Correct. The Number Was " + number)
        document.write("Congrats, You Got The Number Correct. The Number Was " + number)

        break
        
    }
    else if (index < attempts - 1) {

        alert("Try Again :(")

    }
    else {

        alert("Sorry, you've used all attempts. The correct number was " + number);
        document.write("The Number Was " + number)
    }

}

console.log("The Number Was " + number)
console.log(number);

