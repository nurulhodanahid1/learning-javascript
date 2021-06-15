// 0-10km = 50animal/km
// 10-20km = 100animal/km
// 20-~km = 300animal/km

var depth = 22;

if(depth <= 10){
    var animal = depth * 50;
}
else if(depth <= 20){
    var firstPart = 10 * 50;
    var remaining = depth - 10;
    var secondPart = remaining * 100;
    var animal = firstPart + secondPart;
}
else{
    var firstPart = 10 * 50;
    var secondPart = 10 * 100;
    var remaining = depth - 20;
    var thirdPart = remaining * 300;
    var animal = firstPart + secondPart + thirdPart;
}
console.log(animal);



//with function

function animalCount(depth){
    if(depth <= 10){
        var animal = depth * 50;
    }
    else if(depth <= 20){
        var firstPart = 10 * 50;
        var remaining = depth - 10;
        var secondPart = remaining * 100;
        var animal = firstPart + secondPart;
    }
    else{
        var firstPart = 10 * 50;
        var secondPart = 10 * 100;
        var remaining = depth - 20;
        var thirdPart = remaining * 300;
        var animal = firstPart + secondPart + thirdPart;
    }
    return animal;
}

var result = animalCount(23);
console.log(result);
