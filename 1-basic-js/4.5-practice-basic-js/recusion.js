function factorialNum(num){
    if( num == 0){
        console.log(num);
        return num = 1;
    }
    else{
        console.log(num , num - 1)
        return num = num * factorialNum(num - 1);
    }
}
var result = factorialNum(5);
console.log(result);