// 5! = 1*2*3*4*5

// var i = 1;
// var factorial = 1;
// while(i <= 5){
//     factorial = factorial * i;
//     i++;
// }
// console.log(factorial);

function factorialNum(n){
    var i = 1;
    var factorial = 1;
    while(i <= n){
        factorial = factorial * i;
        i++;
    }
    return factorial;
}

var result = factorialNum(5);
console.log(result);