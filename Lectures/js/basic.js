console.log("Hello");

//array
let numbers = [];

console.log(numbers);

numbers.push(125);
numbers.push(127);
numbers.push(225);
numbers.push(226);

console.log(numbers);

numbers.unshift(666);

console.log(numbers);

let number = numbers.pop();

console.log('numbers : '+numbers);
console.log('number : '+number);

//object
let student = {
    name : "David",
    id : "1234567"
};

console.log(student);

let students = [];

students.push(student);
students.push({name : "Mike", id : "1234567"});
students.push({name : "Dmitriy", id : "66666666"});
students.push({name : "Pablo", id : "69696969"});

console.log(students);

//looping
students.forEach(element => console.log(element));

while(students.length > 0) {
    console.log(students.pop());
}
console.log(students);