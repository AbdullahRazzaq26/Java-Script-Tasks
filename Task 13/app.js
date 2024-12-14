var integers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
var even = []

for (let index = 0; index < integers.length; index++) {
    
    if (integers[index] % 2 == 0) {
        
        even += integers.slice(index,index+1)

    } else {
        
    }

}
console.log(integers);
console.log(even);

