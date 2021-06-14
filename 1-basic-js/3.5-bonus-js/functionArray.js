// largest numbers 

function largestNumbers(numbers){
        var larger = [0];
        console.log(larger);
    for(i = 0; i < numbers.length; i++){
        var element = numbers[i];
        // console.log(numbers[i]);
        // console.log(element);
        // console.log(larger);
        if(element > larger){
            larger = element;
        }
    }
    return larger;
}

var numbers = [32, 35, 65, 77, 88, 89, 99];
var result = largestNumbers(numbers);
console.log(result);
