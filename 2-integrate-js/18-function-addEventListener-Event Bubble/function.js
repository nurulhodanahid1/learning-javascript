nums = [12, 34, 12, 56, 90, 20, 56,];
for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if(num % 2 == 0){
        console.log(num,'- is even number');
    }
    else{
        console.log(num * 2,'- is odd number');
    }
}

friend_age = [11, 12, 13, 14, 15, 16];
for (let i = 0; i < friend_age.length; i++) {
    const num = friend_age[i];
    if(num % 2 == 0){
        console.log(num,'- is even number');
    }
    else{
        console.log(num * 2,'- is odd number');
    }
}


// with function

function eveneify_all(nums){
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if(num % 2 == 0){
            console.log(num,'- is even number');
        }
        else{
            console.log(num * 2,'- is odd number');
        }
    }
}

nums = [12, 34, 12, 56, 90, 20, 55,];
eveneify_all(nums);

friend_age = [11, 12, 13, 14, 15, 16];
eveneify_all(friend_age);