var arrayAboutMe = ['Nahid', 22, 77, 'Blue'];

var aboutMeObject = {
    name: 'Nahid',
    age: 22,
    weight: 77,
    color: 'Blue'
}

var myAge = aboutMeObject.age;
console.log(myAge);

var myWeight = aboutMeObject['weight'];
console.log(myWeight);

var myFavColor = 'color';
console.log(aboutMeObject[myFavColor]);

aboutMeObject.weight = 80;
aboutMeObject['name'] = 'Nahid Sarkar';
var changeAge = 'age';
aboutMeObject[changeAge] = 23;
console.log(aboutMeObject);