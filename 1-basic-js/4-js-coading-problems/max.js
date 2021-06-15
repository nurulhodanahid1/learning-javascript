var business = 500;
var minister = 700;
var sochib = 300;

var maxNum = Math.max(business, minister, sochib);
console.log(maxNum);

if(business > minister){
    if(business > sochib){
        console.log('Business is bigger');
    }
    else{
        console.log('Sochib is bigger');
    }
}
else{
    if(sochib < minister){
        console.log('Minister is bigger')
    }
    else{
        console.log('Sochib is bigger');
    }
}