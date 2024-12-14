var userInput = prompt ("Enter Your Age")

if(userInput >= 1 && userInput <= 12){
    alert("Child")
    console.log("Child");    
}
else if(userInput >= 13 && userInput <= 19){
    alert("Teenager")
    console.log("Teenager");    
}
else if(userInput >= 20 && userInput <= 64){
    alert("Adult")
    console.log("Adult");    
}
else if(userInput >= 65 && userInput <= 100){
    alert("Senior Citizen")
    console.log("Senior Citizen");    
}
else if(userInput >= 100){
    alert("No More Citizen")
    console.log("No More Citizen");    
}
else{
    alert("No More Citizen")
    console.log("No More Citizen");    
}