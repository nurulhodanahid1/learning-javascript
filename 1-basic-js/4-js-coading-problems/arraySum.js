var number = [23, 34, 565, 6756, 33, 45, 67, 55];
var sum = 0;
for(i = 0; i < number.length; i++){
    var element = number[i];
    var sum = sum + element;
}
console.log(sum);


function getArraySum(num){
    var sum = 0;
    for(i = 0; i < num.length; i++){
        var element = num[i];
        var sum = sum + element;
    }
    return sum;
}
var num = [34, 45, 65, 443, 33, 32, 667];
var result = getArraySum(num);
console.log(result);

var totalSum = getArraySum([34, 56, 43, 34, 34]);
console.log(totalSum);


var friends = ["Alu", "Bulu", "culu", "dulu", "fulu"];
var allNames = '';
for(var i = 0; i< friends.length;i++){
    var name = friends[i];
    allNames = allNames + name;
}
console.log(allNames);