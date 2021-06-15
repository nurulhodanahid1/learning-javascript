var numbers = [3, 4, 5, 3, 2, 3, 4, 5, 6, 4, 3, 2, 1, 3, 4, 5];

var duplicateFree = [];
for(i = 0; i < numbers.length; i++){
    var element = numbers[i];
    var indexCheck = duplicateFree.indexOf(element);
    if(indexCheck == -1){
        duplicateFree.push(element);
    }
}
console.log(duplicateFree);



function add(a, b){

    return a + b;

}

console.log(add("adam" + "eve"))