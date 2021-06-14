var friendAge = [15, 16, 14, 12, 17];
// console.log(friendAge);
// console.log(friendAge[0]);
// var sonaliAge = friendAge[2];
// console.log(sonaliAge);
friendAge[3] = 200;
console.log(friendAge);
// var position = friendAge.indexOf(17);
// console.log(position);
// var position = friendAge.indexOf(111);
// console.log(position);

// console.log(friendAge);
// console.log(friendAge.length);
// friendAge.push(18);
// friendAge.push(22);
// console.log(friendAge);
// console.log(friendAge.length);
// friendAge.pop();
// console.log(friendAge);

var friends = ['Salam', 'Kalam', 'jabbar', 'Malam', 'Malan', 'Oalam', 'Nalam'];
// friends.shift();
// console.log(friends);
// friends.unshift('Nahid');
// console.log(friends);
var slice1 = friends.slice(3);
var slice2 = friends.slice(3, 4);
console.log(slice1);
console.log(slice2);
console.log(friends);

// var numbers = [1,2,3,4,5];
// var result = numbers.slice(1,3);
// console.log(result);

var numbers = [1,2,3,4,5];
var result = numbers.slice(-1,3);
console.log(result);