function reverseString(str){
    reverse = "";
    for(var i = 0; i < str.length; i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}

var string = "hello how are you alien bhi brothers";
var forAlien = reverseString(string);
console.log(forAlien);



// Let's take a string containing developers' favorite word.

const originalString = "coffee";

// When the split() method is applied on a String object, it returns an Array of letters. 
// split() method expects us to pass a "separator". 
// In our case, there are no special characters or delimiters between each letter.
// So our separator will be an empty string.

const splitLetters = originalString.split('');  // ["c", "o", "f", "f", "e", "e"]

// Now that we an array, let's reverse it using Array.prototype.reverse() method.
// This method picks all the elements in the array, in our case the letters and puts them in a reverse order.
 
const reversedArray = splitLetters.reverse(); // ["e", "e", "f", "f", "o", "c"]

// And finally, lets put all the elements in the array back together to form a new string that's reversed.
// Again, join() method expects us to pass a separator. In our case, it is still an empty string.

const reversedString = reversedArray.join(''); // "eeffoc"


// Without comments

const originalString = "coffee";
const splitLetters = originalString.split('');
const reversedArray = splitLetters.reverse();
const reversedString = reversedArray.join('');