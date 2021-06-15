var marks = [23, 45, 66, 75, 33, 56, 43, 45, 76, 89, 43, 32, 11, 23, 21];

var max = marks[0];
//console.log(max);
for(i = 0; i < marks.length; i++){
    var element = marks[i];
    if(max < element){
        max = element;
    }
}
console.log(max);