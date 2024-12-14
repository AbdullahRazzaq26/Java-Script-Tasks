var userInput = prompt ("Select From The Actions Below \n 1-Show Balance \n 2-Withdraw Money \n 3-Deposit Money \n 4-Exit")
var balance = 20000


if(userInput == 1 ){
    alert("Your Current Balance is " + balance + "Rs")
    console.log("Your Current Balance is " + balance + "Rs");    
}
else if(userInput == 2){
    var withdraw = prompt ("How Much Money You Want To Withdraw")
    var withdrawAmount = +(withdraw);
    var withdrawal = balance - withdrawAmount 
    alert("Congratulations! Your Money Has Been Deposited. Your Current Balance is " + withdrawal + " Rs");
}
else if(userInput == 3){
    var deposit = prompt ("How Much Money You Want To Deposit")
    var depositAmount = +(deposit);
    var deposited = depositAmount + balance
    alert("Congratulations! Your Money Has Been Deposited. Your Current Balance is " + deposited + " Rs");
}
if(userInput == 4 ){
    console.log("Exited");    
}
else{
    console.log("Exited");        
}