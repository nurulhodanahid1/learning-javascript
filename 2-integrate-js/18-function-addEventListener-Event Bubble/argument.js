function addNumbers(){
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {    // arguments array r moto use kora jabe...kinty eti actually array naoy...array r mot push/pop or onno kisu kora jabe na;
        const num = arguments[i];                   // argument is array like objects
        sum = sum + num;
    }
    return sum;
}

var result = addNumbers(2, 3, 4, 5, 6);
console.log(result);