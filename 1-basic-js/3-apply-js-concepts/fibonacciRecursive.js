function fibonacci(num){
    if(num == 0){
        return num = 0;
    }
    if(num == 1){
        return num = 1;
    }
    else{
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}
var result = fibonacci(10);
//console.log(result);



// fibonacci recursion details is here : https://www.youtube.com/watch?v=U1UnHruyqnk

// youtube example 1

function fibonacci(num){
    if(num == 1){
        return num = 1;
    }
    if(num == 2){
        return num = 1;
    }
    else{
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}
var result1 = fibonacci(10);
//console.log(result);

// youtube example 2

function fibonacci(n){
    if(n == 1 || n == 2){
        return n = 1;
    }
    else{
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
var result2 = fibonacci(10);
console.log(result2);