// 0! = 1
// 1! = 1*1
// 2! = 1*2
// 3! = 1*2*3           // 3! = 2!*3        // 3! = (3-1)!*3   
// 4! = 1*2*3*4         // 4! = 3!*4        // 4! = (4-1)!*4                                n! = (n-1)!*n
// 5! = 1*2*3*4*5       // 5! = 4!*5        // 5! = (5-1)!*5        // 5! = 5*(5-1)!        n! = n*(n-1)!


function factorialNum(n){
    if( n == 0){
        return n = 1;
    }
    else{
        return n = n * factorialNum(n - 1);
    }
}
var result = factorialNum(5);
console.log(result);

// factorial recursion details here : https://www.youtube.com/watch?v=g8spKa-LA_I