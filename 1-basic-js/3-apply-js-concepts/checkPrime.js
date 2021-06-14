// var n = 23;
// for(i = 2; i < n; i++){
//     if(n % i == 0){
//         console.log('this is not a prime number');
//         break;
//     }
//     // else{
//     //     console.log('this is a prime number');
//     // }
// }

// function isPrime(n){
//     for(i = 2; i < n; i++){
//         if(n % i == 0){
//             return 'this is not a prime number';                  // moulik songkha check
//         }
//         else{
//             return 'this number is a prime number';
//         }
//     }
// }
// var result = isPrime(22);
// console.log(result);

function isPrime(n){
    for(i = 2; i < n; i++){
        if(n % i == 0){
            return 'this is not a prime number';                  // moulik songkha check
        }
        return 'this number is a prime number';
    }
}
var result = isPrime(22);
console.log(result);