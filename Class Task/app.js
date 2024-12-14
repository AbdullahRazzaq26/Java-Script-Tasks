// var userInput = +prompt("Enter Table Num")
// var userInput2 = +prompt("Enter Start Num")
// var userInput3 = +prompt("Enter End Num")

// for (var i = userInput2 ; i <= userInput3 ; i++ ){
//     document.write(userInput + "x" + i + "=" + userInput*i );  

// }




// var userInput2 = +prompt("Enter Start Num")
// var userInput3 = +prompt("Enter End Num")

// for (var i = userInput2 ; i <= userInput3 ; i++ ){
//     console.log(i);

// }




//  index     0     1       2      3       4      5
//  lenght    1     2       3      4       5      6
// var cars = ["bmw","audi","civic","city","alto","swift"]

// var slice = cars.slice(1,3) // Audi  Civic

// console.log(slice);

// var splice = cars.splice(1,2,"Ferrari") // bmw  Farrari cCity  Acto  Swaft

//console.log(cars);



// var userInput = prompt("Enter Car You Want")
// var flag = "false"
// var cars = ["bmw","audi","civic","city","alto","swift"]
// for (var i = 0, i; i < cars.length; i++) {

//     if (userInput == cars[i]){
//         flag = "true"
//         break
//     }     
// }
// if (flag == "true"){
//     alert("Found")
// }else{
//     alert("Not Found")
// }


// var cars = ["bmw","audi","civic","city","alto","swift"]
// var userInput = prompt("Enter Any Car")
// var flag = "false"

// for (var i = 0; i < cars.length; i++) {

//     if (userInput.toLocaleLowerCase == cars){

//         flag = "true"

//     }else{

//     }
//     if(flag = "true"){
//         alert(userInput + " Is Available")
//     }else{
//         alert("Not Available")
//     }

// }


// var names = ["Abdullah","Amir","Usman","Muhammadd"]
// var largestName = ""
// for (var i = 0; i < names.length; i++) {
//     if (names[i].length > largestName.length){
// largestName = names[i];
//     }
// }

// console.log(largestName + " The Lenght Is " + largestName.length);



// var para = "Hello, my name is Abdullah"
// var userInput = prompt("Find Your Word")


// for (let index = 0; index < para.length; index++) {
//     if (userInput.toLowerCase() == para.toLowerCase().slice(index, index+userInput.length)) {
//         console.log(userInput + " found");
//     }   
// }

//  var replace = prompt("Enter Text You Want To Replace")
// var replaceWith = prompt("Enter Text You Want To Replace With")

// for (var i = 0; i < para.length; i++) {

//     if(para.slice(i, i+replaceWith.length) == userInput){
//         console.log(i);
//         para = para.slice(0,i) + replaceWith + para.slice(i+replaceWith.length);   
//     }
// }
// console.log(para); 





var num = Math.round(Math.random() * 10)
var userInput = prompt("Enter Num Between 1-10")

if (num == userInput) {
    alert("Number Match")
} else {
    alert(num + " Num Not Match")
}


