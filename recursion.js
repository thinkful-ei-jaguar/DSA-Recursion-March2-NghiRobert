function countingsheep(num) {
  if (num === 0) {
    return console.log("All sheep jumped over the fence");
  }
  console.log(num + ": Another sheep jumps over the fence");
  return countingsheep(num - 1);
}
//countingsheep(3);

function PowerCalculator(number, exp) {
  if (exp < 0) {
    return console.log("exponent should be >= 0");
  }
  if (exp === 0) {
    return 1;
  }
  return number * PowerCalculator(number, exp - 1);
}
const a = PowerCalculator(3, 3);
//console.log(a);

function reverseString(str) {
  if (!str.length) {
    return "";
  }
  return str[str.length - 1] + reverseString(str.slice(0, -1));
}
const teststr = reverseString("hello");
//console.log(teststr);

function ntriangularnumber(num) {
  if (num === 0) {
    return 0;
  }
  if (num < 0) {
    return;
  }
  return num + ntriangularnumber(num - 1);
}
const factorial = ntriangularnumber(9);
//console.log(factorial);

function strspliter(param, str) {
  if (!str.length) {
    return "";
  }

  let i = 0;
  let newstr = "";

  if (str.includes(param)) {
    i = str.indexOf(param);
    newstr = str.slice(i + 1);
  }
  let thisstr = str.slice(0, i);
  // console.log(thisstr);
  return [thisstr, ...strspliter(param, newstr)];
}

const str = "1/2/3";
const newarr = strspliter("/", str);
// console.log(newarr);

// [1, strspliter("2/3")];
// [2, strspliter("3")];
// [3, strspliter("")];

// add last 2 digits
// keep adding

// 0 + 1 = 1
// 1 + 1 = 2
// 1 + 2 = 3 stopping point
function Fibonacci(num, total = 0) {
  if (num === 1) {
    return 1;
  }
  if (num <= 0) {
    return 0;
  }
  return Fibonacci(num - 1) + Fibonacci(num - 2);
}
// console.log(Fibonacci(7));

function Factorial(num) {
  if (num === 1) {
    return 1;
  }
  return Factorial(num - 1) * num;
}
// console.log(Factorial(5));

function solvingMaze(maze, x, y) {
  let action = "";
  let allactions = [];
  let currentPos = [x, y];
  // Base
  if (maze[x][y] === "e") {
    return "";
  }
  if (
    (maze[x][y + 1] === " " || maze[x][y + 1] === "e") &&
    maze[x][y + 1] !== undefined
  ) {
    action = "R";
    currentPos = [x, y + 1];
  } else if (maze[x + 1] !== undefined) {
    if (
      (maze[x + 1][y] === " " || maze[x + 1][y] === "e") &&
      maze[x + 1][y] !== undefined
    ) {
      action = "D";
      currentPos = [x + 1, y];
    }
  } else if (
    (maze[x][y - 1] === " " || maze[x][y - 1] === "e") &&
    maze[x][y - 1] !== undefined
  ) {
    action = "L";
    currentPos = [x, y - 1];
  }
  else if(maze[x - 1] !== undefined) {
    if (
      (maze[x - 1][y] === " " || maze[x - 1][y] === "e") &&
      maze[x - 1][y] !== undefined
    ) {
      action = "U";
      currentPos = [x - 1, y];
    }
  }
  return allactions.push(action + solvingMaze(maze, currentPos[0], currentPos[1]));
}

let mySmallMaze = [
  [" ", " ", " "],
  [" ", "*", " "],
  [" ", " ", "e"]
];
// RRDD
// 0,0 - starting position
// 0,1 - R
// 0,2 - R
// 1,2 - D
// 2,2 - D

let maze = [
  [" ", " ", " ", "*", " ", " ", " "],
  ["*", "*", " ", "*", " ", "*", " "],
  [" ", " ", " ", " ", " ", " ", " "],
  [" ", "*", "*", "*", "*", "*", " "],
  [" ", " ", " ", " ", " ", " ", "e"]
];
// RRDDRRRRDD

console.log(solvingMaze(maze, 0, 0));

// Step 1: Input/Output
//          25 : 10011
// Step 2: Algorithm
//          Determine whether number is even or odd
//          Determine whether the number is further divisible
// Step 3: Code

function binaryRep(num) {
  if (num === 0) {
    return "";
  }
  const binary = Math.floor(num % 2); // 1
  return binaryRep(Math.floor(num / 2)) + binary;
}

function Anagrams(word,i=0){
  i=word.length-1;
  if(i<0){
    return ""
  }
  let prefix = word.splice(0,1);
  let letters =word.splice(1);
  



  return Anagrams(letters+prefix,i)
}

//ate
//tea
//eta


