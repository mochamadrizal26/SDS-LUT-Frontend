if(document.readyState !== "loading"){
    console.log("Document is ready");
    initializeCode();
} else {
    document.addEventListener("DOMContentLoaded", function(){
        console.log("Document ready after waiting!");
        initializeCode();
    })
}

let panicCounter = 0;

function initializeCode() {
    const addTextButton = document.getElementById("add-text");

    addTextButton.addEventListener("click", function() {
        const bigText = document.getElementById("big-text");
        
        //console.log("working!");
        bigText.innerHTML = bigText.innerHTML + (Math.random() + 1).toString(36);
    });

    const panicButton = document.getElementById("panic-button");

    panicButton.addEventListener("click", function() {
        const panicArea = document.getElementById("panic-area");
        
        let newParagraph = document.createElement("p");

        let stars = "*".repeat(panicCounter++);

        newParagraph.innerHTML = stars + "PANIC" + stars; 
        
        panicArea.appendChild(newParagraph);
    });

    const reducePanicButton = document.getElementById("reduce-panic-button");

    reducePanicButton.addEventListener("click", function() {
        const panicArea = document.getElementById("panic-area");
        
        panicArea.removeChild(panicArea.lastChild);
        panicCounter--;
    });
}

/*console.log("Hello");

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
console.log(students);*/