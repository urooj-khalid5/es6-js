//Declaring variables

//Q1
const pi = 3.14159;
pi = 3.14;
console.log(pi)

//Q2

const numbers = [1, 2, 3, 4, 5];
const result = sumOfSquares(numbers);
console.log(result)

function sumOfSquares(numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        const square = numbers[i] * numbers[i]
        sum += square;
    }
    return sum;
};
//Q3

const strings = ["apple", "banana", "cherry", "date"];

for (let i = 0; i < strings.length; i++) {
    let firstLetter = strings[i][0]
    console.log(firstLetter);
}

function generateasterisk(n) {
    const asterisk = "*"
    return asterisk.repeat(n)
}
const resultsss = generateasterisk(6)
console.log(resultsss)

function greetPerson(person) {
    var message = "Hello, " + person.name + "! You are " + person.age + " years old.";
    return message;
}
var personObj = { name: "Javeriya", age: 19 };
var greeting = greetPerson(personObj);
console.log(greeting)

function findMaxValue(numbers) {
    let maxValue = Math.max(...numbers);
    return maxValue;
}
let numberArray = [1, 2, 3, 4, 5];
let max = findMaxValue(numberArray);
console.log(max)

// TEMPLATE STRINGS

function greetPerson(name, age) {
   let message = `Hello, ${name}! You are ${age} years old.`;
   return message;
 }
 let name = "Johnny";
 let age = 24;
 let greeting = greetPerson(name, age);
 console.log(greeting)

function calculateSumAndAverage(numbers) {
   let sum = 0;
   for (let i = 0; i < numbers.length; i++) {
     sum += numbers[i];
   }
   let average = sum / numbers.length;
   let message = `Sum: ${sum}, Average: ${average.toFixed(2)}`;
   return message;
 }
 let numbbers = [1, 2, 3, 4, 5];
 let resullt = calculateSumAndAverage(numbbers);
 console.log(resullt)

 function hello(head, text) {
   let mess = `<${head}> ${text} </${head}`;
   return mess;
 }
 const element = hello("div", "kese ho yr");
 console.log(element);

 function here(name,price,quantity) {
   let message = `your product is ${name} price is ${price} and quantity is ${quantity}`
   return message;
 }

 let obj={
   name:"potato",
   price:40,
   quantity:"3 kg"
 }
 const hair=here(obj.name ,obj.price,obj.quantity)
 console.log(hair)

 function also(dates){
   let {date,month,year}=dates
  let msg=`date is ${date}/ ${month}/ ${year}`
  return msg
 }
 let date={
   date:3,
   month:7,
   year:2023
 }
 const mare=also(date)
 console.log(mare)

// DESTRUCTURING

 function key(numbers){
    let [num1 ,num2]=numbers
 const sum=num1+num2
 return sum

  }
  const nuumbers=[4,6]
 const heir=key(nuumbers)
 console.log(heir)

 function getPersonInfo(person) {
   const { name, age, occupation } = person;
   const personInfo = `Name: ${name}, Age: ${age}, Occupation: ${occupation}`;
 return personInfo;
 }
 const person = {
   name: "John ",
   age: 40,
   occupation: "Software Engineer"
 };
  const resultss = getPersonInfo(person);
 console.log(resultss)

 function getHighestScorer(persons) {
   let [firstPerson, ...restPersons] = persons;
   let highestScorer = firstPerson;
 for (let person of restPersons) {
     if (person.score > highestScorer.score) {
       highestScorer = person;
     }
   }
 return highestScorer.name;
 }
 let persons = [
   { name: "Ali", score: 70},
   { name: "Sara", score: 80 },
   { name: "Ahmed", score: 90 },
 ];
 const highestScorer = getHighestScorer(persons);
 console.log(highestScorer);

 function keys(personal){
   let {firstname="", middlename="",lastname= ""}=personal
   let msgs=`${firstname}${middlename}${lastname}`
   return msgs
 }
 let personn={
   firstname:"Javeriya",
   middlename:"Imran",
   lastname:"Khan"
 }
 const share=keys(personn)
 console.log(share)

function getFirstAndLast(arr) {
  const [first, ...middle] = arr;
  const last = middle.pop();
  return { first, last };
 }
const arr = ['apple', 'banana', 'cherry', 'date'];
const resultttt = getFirstAndLast(arr);
 console.log(resultttt);

// DEFAULT,REST AND SPREAD

 function kello(a=0,b=0){
   return a+b
 }
 console.log(kello(7+3))

function kellos(...args){
return args
}
console.log(kellos(1,"three","hello",89+1+1000))

function findMaxValue(numbers) {
  return Math.max(...numbers);
 }
 const numberrs = [1, 2, 3, 4, 5];
 console.log(findMaxValue(numberrs));

 function kelloss(arr1,arr2){
  return[...arr1,...arr2]
}
const arr1=[1,2,3]
const arr2=[4,5,6]
 console.log(kelloss(arr1,arr2))

 function generateId() {
   const timestamp = Date.now().toString(36)
   const randomString = Math.random().toString(36).substr(8, 9)
  return `${timestamp}${randomString}`;
 }
 function addIdToObject(obj) {
   const id = generateId()
   return {
     ...obj, id,};
 }
 const personnn = {
   name: 'John Doe',
   age: 30,
   occupation: 'Software Engineer',
 };
 const personWithId = addIdToObject(personnn);
 console.log(personWithId);

// //ARROW FUNCTIONS

 hellooo=()=>{
     let str="meri gari"
     let length=str.length
     return length
 }
 console.log(hellooo())

 gems=(a,b)=>{
     let product=a*b
     return product
 }
 console.log(gems(5,8))

  calculateAverage = (numbers) => {
    const sum = numbers.reduce((total, num) => total + num, 0);
    const average = sum / numbers.length;
    return average;
};
  const numbersArray = [5, 10, 15, 20, 25];
  const averageResult = calculateAverage(numbersArray);
  console.log("Average: " + averageResult);

herre=(name)=>{
return `hello, ${name}! Welcome!`
}
const names="Javeriya"
const greet=herre(names)
console.log(greet)

gere=()=>{
return `random no between 0 and 1 is: ${num}`
}
const num=Math.random()
const heire=gere(num)
console.log(heire)

PROMISES

function calculateSquareWithDelay(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof number === 'number') {
        const square = number * number;
        resolve(square);
      } else {
        reject('Invalid input. Please provide a number.');
      }
    }, 1000);
  });
}
calculateSquareWithDelay(6)
  .then(result => {
    console.log('Result:', result);
  })
  .catch(error => {
    console.error('Error:', error);
  });

function resolvePromises(promises) {
    return Promise.all(promises)
      .then((results) => {
        return results;
      })
      .catch((error) => {
        console.log('Error:', error);
        return []
      });
  }
  const promises = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
  ];
   resolvePromises(promises)
    .then((resolvedValues) => {
      console.log(resolvedValues);
    })
    .catch((error) => {
      console.log('Error:', error);
    });

function fetchData() {
    return fetch(url)
      .then(response => response.json())
      .catch(error => {
        throw new Error('Error fetching data from URL: ' + error.message);
      });
  }

  const url = 'https://jsonplaceholder.typicode.com/posts';
  fetchData(url)
    .then(result => {
      console.log('Result:', result);
    })
    .catch(error => {
      console.log('Error:', error);
    });

function prommises(promise1,promise2){
return Promise.all([promise1,promise2])
.then(([value1,value2])=>value1+value2)
}
const promise1=Promise.resolve(5)
const promise2=Promise.resolve(8)
prommises(promise1,promise2)
.then(result=>{
    console.log(result)
})
.catch(error=>{
    console.log(error)
})

function timeoutPromise(promise, timeout) {
  return Promise.race([
    promise,
    new Promise((_, reject) => setTimeout(() => reject(new Error('Promise timed out')), timeout))
  ]);
}
const originalPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved');
  }, 2000);
});
const timeout = 1500;
const promiseWithTimeout = timeoutPromise(originalPromise, timeout);
promiseWithTimeout
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.log(error)
  });

const startCountingPromise = new Promise((resolve) => {
  resolve("Start Counting");
});

function counter(value) {
  console.log(value);
}

startCountingPromise
  .then((result) => {
    counter(result)
    return 1
  })
  .then((result) => {
    counter("one")
    return 2
  })
  .then((result) => {
    counter("two")
    return 3
  })
  .then((result) => {
    counter("three")
  });

MAPS

function squareMapping(numbers) {
  var squareMap = {};
  for (var i = 0; i < numbers.length; i++) {
      var num = numbers[i];
      squareMap[num] = num * num;
  }
  return squareMap;
}
var numberss = [1, 2, 3, 4, 5];
var resultt = squareMapping(numberss);
console.log(resultt);

function createAgeMap(objArray) {
  const ageMap = {};
  for (let obj of objArray) {
    const name = obj.name;
    const age = obj.age;
    ageMap[name] = age;
  }
  return ageMap;
}
const people = [
  { name: 'John', age: 25 },
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 35 }
];
const ageMap = createAgeMap(people);
console.log(ageMap);

function containsKey(myMap, key) {
  return myMap.has(key);
}
const myMap = new Map([
  ['John', 25],
  ['Alice', 30],
  ['Bob', 35]
]);

const key = 'Bob';

const resulttt = containsKey(myMap, key);
console.log(resulttt);

function filterMap(originalMap, callback) {
  return new Map([...originalMap].filter(([key, value]) => callback(key, value)));
}

const originalMap = new Map([
  ['apple', 5],
  ['banana', 3],
  ['orange', 7],
  ['grape', 2]
]);
 const filteredMap = filterMap(originalMap, (key, value) => value % 2 === 1);
console.log(filteredMap);

function mergeMaps(map1, map2) {
  const mergedMap = { ...map1 }
 for (let key in map2) {
    if (map2.hasOwnProperty(key)) {
      mergedMap[key] = map2[key]
    }
  }
return mergedMap;
}
const map1 = { a: 1, b: 2, c: 3 };
const map2 = { b: 4, d: 5 };
const mergedMap = mergeMaps(map1, map2);
console.log(mergedMap);

CLASSES

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
const friend1 = new Person("John", "Doe");
const friend2 = new Person("Jane", "Smith");
console.log("Hello, " + friend1.firstName + " " + friend1.lastName + "!");
console.log("Hello, " + friend2.firstName + " " + friend2.lastName + "!");

class personss{
  constructor(name,age){
  this.name=name
  this.age=age
}
introduce(){
  return "hello my name is" + this.name+  "and i am " +this.age+"years old."
}
}
const frnd1=new personss("Ali",20)
console.log(frnd1.introduce())

class rectangle{
  constructor(width,height){
    this.width=width
    this.height=height

  }
  Width(){
    return this.width
  }
  Height(){
    return this.height
  }
  Area(){
    return this.width*this.height
  }
  perimeter(){
    return 2*(this.height+this.width)
  }
}
const rect=new rectangle(20,30)
console.log("Width of rectangle: " + rect.Width());
console.log("Height of rectangle: " + rect.Height());
console.log("Area of rectangle: " + rect.Area());
console.log("Perimeter of rectangle: " + rect.perimeter());

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getDiameter() {
    return 2 * this.radius;
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }

  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

const circle = new Circle(5);
console.log("Diameter of the circle:", circle.getDiameter());
console.log("Circumference of the circle:", circle.getCircumference());
console.log("Area of the circle:", circle.getArea());

class pereson{
  constructor(name,age,course){
this.name=name
this.age=age
this.course=course
  }
  introoduction(){
    return "Hello, my name is " + this.name + ", I am " + this.age + " years old, and I am studying " + this.course + ".";  }
}
const student=new pereson ("Ali",20,"computer science")
console.log(student.introoduction())

class Square {
  constructor(side) {
    this.side = side;
  }

  getArea() {
    return Math.pow(this.side, 2);
  }

  getPerimeter() {
    return 4 * this.side;
  }
}

const square = new Square(5);
console.log("Area of the square:", square.getArea());
console.log("Perimeter of the square:", square.getPerimeter());

HOISTING

function printValue() {
  console.log(variable);
}

var variable = "Hello, World!";
printValue();

function printValues() {
  console.log(nummm);
}

let nummm = "Hello, World!";
printValues();

function jojo() {
  console.log(soup);
}

const soup = "Hello, World!";
jojo();

function guns(){
  console.log(keeeys)
}
guns()

printMessage()

function printMessage() {
  console.log("Hello, World!");
}

//THIS KEYWORD

const persooon = {
    name: "John",
    greet: function () {
      console.log("Hello, " + this.name + "!");
    }
  };
  persooon.greet()

function Car(brand) {
  this.brand = brand;
  this.speed = 0;
  this.accelerate = function (value) {
    this.speed += value;
  };
  this.printSpeed = function () {
    console.log("Current speed: " + this.speed + " km/h");
  };
}
const myCar = new Car("Toyota");
myCar.accelerate(20);
myCar.accelerate(30);
myCar.printSpeed();

const calculator = {
    value: 0,
    add: function(number) {
      this.value += number;
    },
    subtract: function(number) {
      this.value -= number;
    },
    multiply: function(number) {
      this.value *= number;
    },
    printValue: function() {
      console.log("Current value: " + this.value);
    }
  };

  calculator.add(5);
  calculator.subtract(2);
  calculator.multiply(3);
  calculator.printValue()

const book={
  title:"Maths",
  author:"John Doe",
  pages:50,
  printInfo:function(){
console.log("title:",this.title)
console.log("author:",this.author)
console.log("pages:",this.pages)
  }
}
book.printInfo()

function Pperson(name, age) {
  this.name = name;
  this.age = age;

  this.introduce = function() {
    console.log("Hello, my name is", this.name, "and I am", this.age, "years old.");
  };
}
var person1 = new Pperson("John", 25);
person1.introduce();

const counter = {
  count: 0,
  increment: function() {
    this.count += 1;
  },
  reset: function() {
    this.count = 0;
  }
};
counter.increment();
console.log(counter.count);

const product = {
    name: "Example Product",
    price: 250,
    discount: 30,
    calculateDiscountedPrice: function() {
      const discountedPrice = this.price - (this.price * this.discount / 100);
      return discountedPrice;
    }
  };
    const discountedPrice = product.calculateDiscountedPrice();
  console.log("Discounted price:", discountedPrice);

const game = {
    play: function() {
      console.log("Playing the game!");
    },
  };

  game.play();

//FOR OF LOOP

let fruits=["apple","banana","peach","mango"]
for(let fruit of fruits){
console.log(fruit)
}

let message=" Hello guys"
for(let character of message){
console.log(character)
}

let pereeson={
    name:"Ali",
    age:20,
    country:"Pakistan"
    }
    for(let key in pereeson){
        console.log(key+":"+pereeson[key])
    }

let colors=new Set(["blue","orange","yellow","brown"])
for(let color of colors){
    console.log(color)
}

var myArray = [];
for (var i = 0; i < 10; i++) {
  myArray.push(i);
}
console.log(myArray);
for (var j = 0; j < myArray.length; j++) {
  console.log(myArray[j]);
}
for (var value of myArray) {
  console.log(value);
}

//FOR IN LOOP

var myObject = {
    name: "John",
    age: 30,
    city: "New York"
  };
    for (var key in myObject) {
    console.log(key + ": " + myObject[key]);
  }

  var myArray = ["John", 30, "New York"];

  for (var i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
  }

let son={
    name:"Ali",
    age:20,
    country:"Pakistan"
    }
    for(let key in son){
        console.log(key+":"+son[key])
}

let no=[12,34,56,44]
for(let key in no ){
    console.log(no[key])
}

let ellow="Hello guys"
for(let index in ellow){
console.log(ellow[index])
}

var scores = new Map();
scores.set("John", 80);
scores.set("Alice", 95);
scores.set("Bob", 70);

for (var [na, score] of scores) {
  console.log(na + ": " + score);
}

var car = {
    brand: "example",
    model: 2014,
    year: 2019
  };
    for (var key in car) {
    console.log(key + ": " + car[key]);
  }

//ASYNC AWAIT

function delayedGreeting(namee){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`hello,${namee}`)
    }, 2000);
  })
}
async function greeet(){
  const greeeeting=await delayedGreeting("Johnny")
  console.log(greeeeting)
}
greeet()

function fettchDataa(dataaaa){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Hello, ${dataaaa}`)

    },3000);
  })
}
async function fetchesdata(){
const dataaaa=await fettchDataa("message sent successfully")
console.log(dataaaa)
}
fettchDataa()
  .then(dataaaa => {
    console.log(dataaaa)
  })
  .catch(error => {
    console.error('Error:', error);
  });
fetchesdata()

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchhUserss() {
  await delay(4000)

  const usersss = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Alex' }
  ]

  return usersss
  }

  fetchhUserss()
  .then(users => {
    console.log(users);
})
  .catch(error => {
    console.error('Error:', error);
  });

async function fetchhhData(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  if (!response.ok) throw new Error('Error fetching data');
  return await response.json();
}

const id = 123

fetchhhData(id)
  .then(dataaaa => {
    console.log(dataaaa)
  })
  .catch(error => {
    console.error('Error:', error);
  });

function FeettchDataa(dataaaaa){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Hello, ${dataaaaa}`)

    },5000);
  })
}
async function fetchessdata(){
const dataaaaa=await FeettchDataa("message sent successfully")
console.log(dataaaaa)
}
FeettchDataa()
  .then(dataaaaa => {
    console.log(dataaaaa)
  })
  .catch(error => {
    console.error('Error:', error);
  });
fetchessdata()

let counterss = 0;

function timeout(valueee) {
  return new Promise((resolve) => {
    setTimeout(() => {
      counterss++;
      resolve({ counterss, valueee });
    }, 1000);
  });
}

async function asyncFunction(valueee) {
  console.log("Counter:", counterss);
  console.log("Argument:", valueee);
  return await timeout(valueee);
}

async function main() {
  for (let i = 1; i <= 10; i++) {
    const resulttss = await asyncFunction(i);
    console.log("Resolve value:", resulttss);
  }
}
main();


CLOSURES

function wounter() {
  let wount = 0;

  return function() {
    wount++;
    console.log("wounter value:", wount);
  };
}

const gell = wounter();

gell(); 
gell(); 
gell(); 



function createMultiplier(nomber) {
  return function(givenNumber) {
    return givenNumber * nomber;
  };
}

const multiplyByTwo = createMultiplier(2);

console.log(multiplyByTwo(5))

const multiplyByThree = createMultiplier(3);

console.log(multiplyByThree(4))


function secretMessage(sting) {
  return function() {
    console.log("Secret message:", sting);
  };
}

const logSecretMessage = secretMessage("Hello, World!");

logSecretMessage();

function evaluate(numm1, numm2) {
    return {
        addd: function () {
            return numm1 + numm2;
        },
        multiplys: function () {
            return numm1 * numm2;
        }
    };
}

const calculatorsss = evaluate(5, 3);

console.log(calculatorsss.addd());

console.log(calculatorsss.multiplys());

