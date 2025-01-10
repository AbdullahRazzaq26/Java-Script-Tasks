var age;
var salary;

function input() {
    age = prompt("Enter your age");
    salary = prompt("Enter your salary");
    console.log(age);
    console.log(salary);
}

function approve() {
    if (age >= 18 && salary >= 50000) {
        alert("Your Loan Has Been Approved");
    } else {
        alert("Your Loan Has Not Been Approved, You don't fill the criteria");
    }
}

