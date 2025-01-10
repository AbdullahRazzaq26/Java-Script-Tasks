var userInput = prompt ("Enter Your Score (Max Score = 10) ")

if(userInput >= 5 && userInput <= 10){
    alert("Excellent")
    console.log("Excellent");    
}
else if(userInput >= 3 && userInput <= 5){
    alert("Good")
    console.log("Good"); 
}
else if(userInput >= 1 && userInput <= 2){
    alert("Fair")
    console.log("Fair"); 
}
else if(userInput == 0){
    alert("Better Luck Next Time")
    console.log("Better Luck Next Time"); 
}
else if(userInput >= 10){
    alert("Write Number Between 1-10")
    console.log("Write Number Between 1-10"); 
}
else{
    alert("Write Number Between 1-10")
    console.log("Write Number Between 1-10");    
}