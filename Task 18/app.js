let counter1 = 0;
let counter2 = 0;
let counter3 = 0;

function count1() {
    counter1++;
    console.log("Present count: " + counter1);
}
function count2() {
    counter2++;
    console.log("Absent count: " + counter2);
}
function count3() {
    counter3++;
    console.log("Late count: " + counter3);
}
function result() {
    alert(`Present: ${counter1}\nAbsent: ${counter2}\nLate: ${counter3}`);
}
