// 5! = 1*2*3*4*5

// var factorial = 1;
// for(var i = 1; i <= 5; i++){
//     factorial = factorial * i;
//     //console.log(i, factorial);
// }

function factorialNum(n){
    var factorial = 1;
    for(var i = 1; i <= n; i++){
        factorial = factorial * i;
    }
    return factorial;
}
var result = factorialNum(6);
console.log(result);