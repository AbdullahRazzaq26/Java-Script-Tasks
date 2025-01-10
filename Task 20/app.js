let tries = 5


function game() {
    var random1 = Math.floor(Math.random() * 10)
    var random2 = Math.floor(Math.random() * 10)
    var random3 = Math.floor(Math.random() * 10)

    if (tries > 0) {
        document.getElementById("box1").textContent = random1
        document.getElementById("box2").textContent = random2
        document.getElementById("box3").textContent = random3
    }

    if (random1 == random2 && random2 == random3) {
        alert("You won!")
    } else {
        tries--;
        if (tries > 0) {
            document.getElementById("result").textContent = `Try again! You have ${tries} tries left.`;
        } else {
            document.getElementById("result").textContent = "Game over! You lose.";
            document.getElementById("generateBtn").disabled = true;
            document.getElementById("resetbtn").style.display = "inline-block"
        }
    }
}

function reset ()   {
    document.getElementById("resetbtn").style.display = "none"
    document.getElementById("generateBtn").disabled = false;
    document.getElementById("box1").textContent = "0"
    document.getElementById("box2").textContent = "0"
    document.getElementById("box3").textContent = "0"
    tries = 5
    document.getElementById("result").textContent = `You have 5 tries left.`;
}