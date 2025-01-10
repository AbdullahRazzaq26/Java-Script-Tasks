var userInput = prompt ("Enter The Number You Want Table Of")
var startNum = prompt ("Enter The Starting Number Of the Table")
var endNum = prompt ("Enter The Ending Number Of the Table")

for (let i = startNum; i <= endNum; i++) {

    document.write(userInput + " x " + i + " = " + userInput*i + "</br>")
    console.log(userInput + " x " + i + " = " + userInput*i) 

}