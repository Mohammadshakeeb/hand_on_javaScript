var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
let catName = "Oliver";
let catSound = "Meow!";
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line
const sum = 10 + 10;
const difference = 45 - 33;
const product = 8 * 10;
const quotient = 66 / 33;
let myVar = 87;

// Only change code below this line
myVar++;
let myVar = 11;

// Only change code below this line
myVar--;
const ourDecimal = 5.7;
var myDecimal=6.77;
const product = 5.0 * 1.0;
const quotient = 4.4/ 2.0; // Change this line
const remainder =11%3;
let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a +=12;
b +=9;
c += 7;
let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -=  1;
let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *=  5;
b *=  3;
c *= 10;
let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /=  4;
c /= 11;
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; 
const myStr = "This is the start."+" This is the end."; 
let myStr="This is the first sentence. "
myStr+= "This is the second sentence.";
// Only change code below this line
const myName = "Mohammad Shakeeb";
const myStr = "My name is "+ myName+ "and I am well!";
const someAdjective = "fun";
let myStr = "Learning to code is ";
myStr+=someAdjective;
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0];
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World";
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2];
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length-1];
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length-2];
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "The "+myAdjective+ " "+myNoun+" "+myVerb+" "+ myAdverb;
const myArray = ["shakeeb",17]
const myArray = [["shakeeb",17],["ansari",18]];
const myArray = [50, 60, 70];
var myData=myArray[0];
const myArray = [18, 64, 99];
myArray[0]=45;
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1];
  const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog",3]);
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
 const removedFromMyArray = myArray.pop();
 const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
const removedFromMyArray=myArray.shift();
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);
const myList = [
    ["Chocolate Bar", 15],
    ["Chocolate Bar", 15],
    ["Chocolate Bar", 15],
    ["Chocolate Bar", 15],
    ["Chocolate Bar", 15],
    ];
    function reusableFunction(){
        console.log("Hi World")
      }
      reusableFunction();
      function functionWithArgs(p1, p2) {
        console.log(p1+p2);
      }
      functionWithArgs(1,2);
      functionWithArgs(7,9);
      function timesFive(num){
        return num*5;
      }
      let myGlobal=10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal=5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
function myLocalScope() {
    // Only change code below this line
    let myVar
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);
  const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
     let outerWear="sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(){
  sum=sum+5;
}

// Only change code above this line

addThree();
addFive();
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed=processArg(7);
function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    item=arr.shift();
    return item;
    // Only change code above this line
  }
  
  // Setup
  const testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));
  function welcomeToBooleans() {
    // Only change code below this line
  
    return true; // Change this line
  
    // Only change code above this line
  }
  function trueOrFalse(wasThatTrue) {
    // Only change code below this line
  if (wasThatTrue) {
      return "Yes, that was true";
    }
    return "No, that was false";
  }
  function testEqual(val) {
    if (val==12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);
  function testStrict(val) {
    if (val===7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);
  function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");
  function testNotEqual(val) {
    if (val!=99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);
  function testStrictNotEqual(val) {
    if (val!==17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);
  function testGreaterThan(val) {
    if (val>100) {  // Change this line
      return "Over 100";
    }
  
    if (val>10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);
  function testGreaterOrEqual(val) {
    if (val>=20) {  // Change this line
      return "20 or Over";
    }
  
    if (val>=10) {  // Change this line
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  testGreaterOrEqual(10);
  function testLessThan(val) {
    if (val<25) {  // Change this line
      return "Under 25";
    }
  
    if (val<55) {  // Change this line
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  testLessThan(10);
  function testLessOrEqual(val) {
    if (val<=12) {  // Change this line
      return "Smaller Than or Equal to 12";
    }
  
    if (val<=24) {  // Change this line
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  testLessOrEqual(10);
  function testLogicalAnd(val) {
    // Only change code below this line
  
    if (val<=50 && val>=25) {
     
        return "Yes";
      }
    
  
    // Only change code above this line
    return "No";
  }
  
  testLogicalAnd(10);
  function testLogicalOr(val) {
    // Only change code below this line
  
    if (val<10 ||val>20) {
      return "Outside";
    }
    // Only change code above this line
    return "Inside";
  }
  
  testLogicalOr(15);
  function testElse(val) {
    let result = "";
    // Only change code below this line
  
    if (val > 5) {
      result = "Bigger than 5";
    }
  
    else {
      result = "5 or Smaller";
    }
  
    // Only change code above this line
    return result;
  }
  
  testElse(4);
  function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
  
    else if (val < 5) {
      return "Smaller than 5";
    }
  else{
    return "Between 5 and 10";
  }
  }
  testElseIf(7);
  function orderMyLogic(val) {
    if (val< 5 ){
      return "Less than 5";
     
    } else if (val < 10) {
      return "Less than 10";
      
    } else {
       return "Greater than or equal to 10";
    }
  }
  
  orderMyLogic(7);
  function testSize(num) {
    // Only change code below this line
   if (num < 5) {
     return "Tiny";
   } 
    else if (num < 10){
      return "Small";
    }
    else if (num < 15){
      return "medium";
    }
    else if (num < 20){
      return "Large";
    }
    else
      return "huge";
   
    // Only change code above this line
  }
  function golfScore(par, strokes) {
    // Only change code below this line
  
    if (strokes === 1) return "Hole-in-one!";
  
    else if ((strokes - par) <= -2) return 'Eagle';
  
    else if ((strokes - par) === -1) return 'Birdie';
  
    else if (strokes === par) return 'Par';
  
    else if ((strokes - par) === 1) return 'Bogey';
  
    else if ((strokes - par) === 2) return 'Double Bogey';
  
    else return 'Go Home!';
    // Only change code above this line
  }
  function caseInSwitch(val) {
    var answer = "";
  
    switch(val) {
      case 1:
        answer = "alpha";
        break;
      case 2:
        answer = "beta";
        break;
      case 3:
        answer = "gamma";
        break;
      case 4:
        answer = "delta";
    }
    return answer;
  }

  function switchOfStuff(val) {
    var answer = "";
    // Only change code below this line
  
    switch (val) {
      case "a":
        answer = "apple";
        break;
      case "b":
        answer = "bird";
        break;
      case "c":
        answer = "cat";
        break;
      default:
        answer = "stuff";
    }

    function sequentialSizes(val) {
        let answer = "";
        // Only change code below this line
      
      
      
        // Only change code above this line
        return answer;
      }
      
      sequentialSizes(1);
      function chainToSwitch(val) {
        var answer = "";
        // Only change code below this line
      
        switch (val) {
          case "bob":
            answer = "Marley";
            break;
          case 42:
            answer = "The Answer";
            break;
          case 1:
            answer = "There is no #1";
            break;
          case 99:
            answer = "Missed me by this much!";
            break;
          case 7:
            answer = "Ate Nine";
            break;
        }
      
        // Only change code above this line
        return answer;
      }
      function isLess(a, b) {
        // Only change code below this line
        return a<b;
        
        // Only change code above this line
      }
      
      isLess(10, 15);
      function abTest(a, b) {
        // Only change code below this line
      
        if (a < 0 || b < 0) return undefined;
      
        // Only change code above this line
      
        return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
      }
      var count = 0;
function cc(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
  }
  if(count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}


