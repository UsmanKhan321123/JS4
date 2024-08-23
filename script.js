//                          Chapter 9-11

let city = prompt("Please enter the city name.");
let karachi = "karachi" || "Karachi" || "KARACHI";
if (city === karachi) {
  alert("Welcome to city of lights");
} else {
  alert(`Welcome to ${city}`);
}

// // 9.2

let gender = prompt("Please Enter Your Gender");
gender = gender.toLocaleLowerCase();
if (gender == "male") {
  alert(`Good Morning Sir`);
} else if (gender == "female") {
  alert(`Good Morning Mam`);
} else {
  alert(`Please Enter Proper Gender`);
}

//  9.3

let trafficSignal = prompt(`Please Enter the Traffic Signal`);
trafficSignal = trafficSignal.toLocaleLowerCase();
if (trafficSignal == "red") {
  alert(`Must Stop`);
} else if (trafficSignal == "yellow") {
  alert(`Ready To Move`);
} else if (trafficSignal == "green") {
  alert(`Move Now`);
} else {
  alert(`Please Enter The correct color`);
}

//  9.4

let fuel = parseFloat(prompt("Tell me the remaining fuel of your car in Litres"))
if (fuel<0.25) {
alert(`Please Refill the fuel of Your car`)
}else{
    alert(`All ok`)
}

// 9.6

let sub1marks = parseFloat(prompt(`Enter Marks of Subject1`));
let sub2marks = parseFloat(prompt(`Enter Marks of Subject2`));
let sub3marks = parseFloat(prompt(`Enter Marks of Subject3`));
let totalMarks = parseFloat(prompt(`Enter total Marks of 3 subjects`));
let obtainedMarks = sub1marks + sub2marks + sub3marks;
let percentage = (obtainedMarks/totalMarks) * 100;
let grade;
let remarks;
if(percentage>=80){
    grade = "A-one"
    remarks = "Excellent"
}
else if(percentage>=70 && percentage<80){
    grade = "A";
    remarks = "Good"
}
else if(percentage>=60 && percentage<70){
    grade = "B";
    remarks = "You need to Improve"
}
else{
    grade = "Fail";
    remarks = "Sorry"
}
document.getElementById("heading").innerText = `Marks Sheet`;
document.getElementById("tm").innerText = `Total Marks : ${totalMarks}`;
document.getElementById("om").innerText = `Obtained Marks : ${obtainedMarks}`;
document.getElementById("per").innerText = `Percentage : ${percentage}%`;
document.getElementById("gr").innerText = `Grade : ${grade}`;
document.getElementById("rem").innerText = `Remarks : ${remarks}`;

//9.7

let secretNumber = Math.ceil(Math.random()*10).toFixed(0);
let guessNumber = parseInt(prompt("Guess the Number from 1-10"));
if(secretNumber === guessNumber){
    alert(`"Bingo! Correct Answer"`)
}
else if(guessNumber ===secretNumber + 1 || guessNumber === secretNumber - 1 ){
    alert(`"Close enough to the Correct Answer"`)
}
else{
    alert(`Ohoo! Your guess is wrong!!`)
}
document.getElementById("guess").innerText = `Guess Number : ${guessNumber}`
document.getElementById("secret").innerText = `secret Number : ${secretNumber}`

// 9.8

let inputNumber = parseInt(prompt("Enter a Number"));
if (inputNumber % 3 === 0) {
  alert(`${inputNumber} is divisible by 3`);
  document.getElementById(
    "divisible"
  ).innerText = `${inputNumber} is divisible by 3`;
} else {
  alert(`${inputNumber} is not divisible by 3`);
  document.getElementById(
    "divisible"
  ).innerText = `${inputNumber} is not divisible by 3`;
}

9.9

let number = parseInt(prompt("Enter a Number"));
if (number % 2 ===0) {
    alert(`${number} is an Even Number`);
 document.getElementById("evenodd").innerText = `${number} is an Even Number`;
} else {
    alert(`${number} is an Odd Number`);
 document.getElementById("evenodd").innerText = `${number} is an Odd Number`;
}

//  9.10

let temperature = parseInt(prompt("Enter Temperature"));
if (temperature > 40) {
    alert("Its too hot outside.")
  document.getElementById("weather").innerText = "Its too hot outside.";

}
else if(temperature> 30 && temperature <= 40){
    alert("The Weather is normal.")
  document.getElementById("weather").innerText = "The Weather is normal." ;

}
else if(temperature> 20 && temperature <= 30){
    alert("Today's Weather is cool.")
  document.getElementById("weather").innerText ="Today's Weather is cool.";

}
else{
    alert("OMG! Today's Weather is so cool!")
  document.getElementById("weather").innerText = "OMG! Today's Weather is so cool!";
}

// 9.11

let num1 = parseInt(prompt("Enter first number"));
let num2 = parseInt(prompt("Enter second number"));
let operation = prompt(
  "Enter the Operation You want to Perform ( + or - or * or / or % )"
);
if (operation === "+") {
  alert(`The sum of ${num1} and ${num2} is ${num1 + num2}`);
  document.getElementById("operation").innerText = `Operation : ${operation}`;
  document.getElementById(
    "result"
  ).innerText = `The sum of ${num1} and ${num2} is ${num1 + num2}`;
} else if (operation === "-") {
  alert(`The Difference of ${num1} and ${num2} is ${num1 - num2}`);
  document.getElementById("operation").innerText = `Operation : ${operation}`;
  document.getElementById(
    "result"
  ).innerText = `The Diffrence of ${num1} and ${num2} is ${num1 - num2}`;
} else if (operation === "*") {
  alert(`The Product of ${num1} and ${num2} is ${num1 * num2}`);
  document.getElementById("operation").innerText = `Operation : ${operation}`;
  document.getElementById(
    "result"
  ).innerText = `The Product of ${num1} and ${num2} is ${num1 * num2}`;
} else if (operation === "/") {
  alert(`The Quotient of ${num1} and ${num2} is ${num1 / num2}`);
  document.getElementById("operation").innerText = `Operation : ${operation}`;
  document.getElementById(
    "result"
  ).innerText = `The Quotient of ${num1} and ${num2} is ${num1 / num2}`;
} else if (operation === "%") {
  alert(`The Remainder of ${num1} and ${num2} is ${num1 % num2}`);
  document.getElementById("operation").innerText = `Operation : ${operation}`;
  document.getElementById(
    "result"
  ).innerText = `The Remainder of ${num1} and ${num2} is ${num1 % num2}`;
} else {
  alert("Please enter a valid Operation");
  document.getElementById("operation").innerText = `Operation : ${operation}`;
  document.getElementById(
    "result"
  ).innerText = `${operation} is invalid Operation`;
}
