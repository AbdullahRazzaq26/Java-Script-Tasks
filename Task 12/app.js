var integer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

for (var i = 0; i < integer.length; i++) {

    if (integer[i] % 3 === 0) {

        integer[i] = "Three";
    }
    else if (integer[i] % 5 === 0) {

        integer[i] = "five";

    } else if (integer[i] % 5 === 0 && integer[i] % 3 === 0) {

        integer[i] = "ThreeFive";
    }
}
console.log(integer);
document.write(integer);


