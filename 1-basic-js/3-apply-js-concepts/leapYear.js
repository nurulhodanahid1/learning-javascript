// const year = 3200;
// const remainder = year % 4;
// if(remainder == 0){
//     console.log('Your year is leap year');
// }
// else{
//     console.log('Your year is not leap year');
// }


// // program to check leap year
// function checkLeapYear(year) {
//     //three conditions to find out the leap year
//     if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//         console.log(year + ' is a leap year');
//     } else {
//         console.log(year + ' is not a leap year');
//     }
// }
// // take input
// const year = 1800;
// checkLeapYear(year);


function checkLeapYear(year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return true;
    } else {
        return (year + ' is not a leap year');
    }
}
const result = checkLeapYear(1800);
console.log(result);