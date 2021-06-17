function squareIt(num){
    var result;
    if(num % 2 == 0){
        result = num;
    }
    else{
        result = num * 2;
    }
    return result;
}
var input = squareIt(11);
var square = input * input;
console.log(square);

// function and array

function eveneify_all(nums){
    eveneify_array = [];
    for (let i = 0; i < nums.length; i++) {
        const numbers = nums[i];
        var result = squareIt(numbers);    // squareIt function call kora hoise;
        eveneify_array.push(result);
        
    }
    return eveneify_array;
}
nums = [11, 34, 15, 56, 91, 20, 55,];
var nums_even = eveneify_all(nums);
console.log(nums_even);