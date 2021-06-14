var student1 = {name:'Abir', phone: 1012, age: 13};
var student2 = {name:'Mahi', phone: 0000, age: 14};


console.log(student1);

var phoneNumber1 = student1.phone;
console.log(phoneNumber1);
var phoneNumber2 = student1['phone'];
console.log(phoneNumber2);
var phonePropName = "phone"; //important line;
var phoneNumber3 = student1[phonePropName];
console.log(phoneNumber3);

// update student2 phone no
student2.phone = 11111;
console.log(student2);
student2['phone'] = 2222;
console.log(student2);
student2[phonePropName] = 333333;
console.log(student2);

//new property add
student2.cinema = 'Ogni';
console.log(student2);
student2['id'] = 100;
console.log(student2);
var yourGender = 'gender';
student2[yourGender] = 'female';
console.log(student2);
