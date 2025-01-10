var userInput = prompt ("Enter The Weather Temperature")

if(userInput >= 100){
    alert("Extreme Heat Advisory")
    console.log("Extreme Heat Advisory");    
}
else if(userInput >= 80){
    alert("Warm Weather Advisory")
    console.log("Warm Weather Advisory");    
}
else if(userInput >= 60){
    alert("Pleasant Weather")
    console.log("Pleasant Weather");    
}
else if(userInput >= 32){
    alert("Cool Weather")
    console.log("Cool Weather");    
}
else if(userInput <= 32){
    alert("Freezing Temperature Advisory")
    console.log("Freezing Temperature Advisory");    
}
else{
    alert("Freezing Temperature Advisory")
    console.log("Freezing Temperature Advisory");    
}