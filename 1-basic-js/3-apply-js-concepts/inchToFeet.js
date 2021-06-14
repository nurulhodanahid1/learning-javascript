// var inch = 24;
// var feet = inch / 12;  //variable die 
// console.log(feet);

function inchToFeet(inch){
    var feet = inch / 12;
    return feet;
}
var nanaFeet = inchToFeet(48);
console.log(nanaFeet);
var naniFeet = inchToFeet(74);   //function die
console.log(naniFeet);
//var dadiFeet = 102;

var givenInch = [48, 74, 102];
var dadiFeet = inchToFeet(givenInch[2]);   //array die
console.log(dadiFeet);