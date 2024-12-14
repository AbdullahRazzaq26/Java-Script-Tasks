let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let total = 0;
let discountt = 0;

function count1() {
    counter1++;
    console.log("Item 1 :" + counter1);
}
function count2() {
    counter2++;
    console.log("Item 2 :" + counter2);    
}
function count3() {
    counter3++;
    console.log("Item 3 :" + counter3);

}
function result() {
    total = 500*counter1 + 700*counter2 + 800*counter3
    alert("Your Total is " + total);
    console.log("Your Total is " + total);
    
}
function discount() {
    if (total >= 1000) {
        discountt = total - (total * 0.1)
        alert("Your Total After 10% Discount is " + discountt)
    console.log("Your Total After 10% Discount is " + discountt);

    } else {
        alert("Your total is below Rs 1000, discount can not be applied")
    console.log("Your total is below Rs 1000, discount can not be applied");

    }

}