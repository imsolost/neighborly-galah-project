
// # 1 reverse a string

function reverseString(str) {
  return str
  	.split('')
  	.reverse()
  	.join('');
}

reverseString("hello");


// # 2 factorialize a number

function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num -1);
}

factorialize(5);

// # 3 check for palindromes

function palindrome(str) {
  // Good luck!
  var modded = str
  	.toLowerCase()
  	.replace(/[\s&\/\\#,+()$~%.'":*?<>{}_-]/g, '');
  var reverse = modded
  	.split('')
  	.reverse().join('');
  return modded === reverse;
}



palindrome("eye");

// # 4 Find the longest word in a string

function findLongestWord(str) {
  var array = str.split(' ');
  var acc = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i].length > acc) {
      acc = array[i].length;
    }
  }
  return acc;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

// # 5 Title Case a Sentence


function titleCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(function(word) {
            return word[0].toUpperCase() + word.substr(1);
        })
        .join(' ');
}


titleCase("I'm a little tea pot");

// # 6 Return largest numbers in array

// Function to sort numerically - read up on sort
function sortNumber(a,b) {
    return a - b;
}

function largestOfFour(arr) {
  // You can do this!
  acc = [];
  for (var i = 0; i < arr.length; i++) {
    acc.push(arr[i]
      .sort(sortNumber)
      .reverse()
      [0]);
  }
  return acc;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// # 7 Confirm the Ending

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return str.substring(str.length, str.length - target.length) === target;
}

confirmEnding("Bastian", "n");

// # 8 Repeat a string repeat a string


function repeatStringNumTimes(str, num) {
  // repeat after me
  if (num < 1) {
    return "";
  }
  var repeat = "";
  for (var i = 0; i < num; i++) {
    repeat = repeat + str;
  }
  return repeat;
}

repeatStringNumTimes("abc", 3);

// # 9 Truncate a string


function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num && num > 3) {
    return str.slice(0, num - 3) + "...";
  }
  if (str.length > num && num < 4) {
    return str.slice(0, num) + "...";
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

// # 10 Chunky Monkey

 function chunkArrayInGroups(arr, size) {
  // Break it up.
  var result = [];
  
  for (var i = 0; i < arr.length; i += size) {
    var smallArr = [];
    
    for (var j = 0; j < size && i + j < arr.length; j++) {
      smallArr.push(arr[i + j]);
    }
    result.push(smallArr);
  }
  return result;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);

// # 11 Slasher Flick

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  if (howMany > arr.length) {
    return [];
  }
  if (howMany < arr.length) {
    var slashed = arr.slice(howMany - arr.length);
    return slashed;
  }
}

slasher([1, 2, 3], 2);

// # 12 Mutations

function mutation(arr) {
  var elOne = arr[0].toLowerCase();
  var elTwo = arr[1].toLowerCase().split('');
  var acc = true;
  
  for (var i = 0; i < elTwo.length; i++) {
    if (elOne.indexOf(elTwo[i]) === -1) {
      acc = false;
    }
  }
  return acc;
}


mutation(["mary", "army"]);

// # 13 Falsy Bouncer


function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  function isTrue(element) {
    return (Boolean(element));
  }
  
  var newArray = arr.filter(isTrue);
  return newArray;
}

bouncer([7, "ate", "", false, 9]);

// # 14 Seek and Destroy

function destroyer(arr, ...args) {
  
  function notSame(element) {
    return element !== args[i];
  }
  
  for (var i = 0; i < args.length; i++) {
    arr = arr.filter(notSame);
  }
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// # 15 Where do I belong

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var acc = 0;
  
  function sortNumber(a,b) {
    return a - b;
}
  var sorted = arr.sort(sortNumber);
  
  
  for (var i = 0; i < arr.length; i++) {
    if (num > sorted[i] ) {
      acc = i + 1;
    }
  }
  return acc;
}

getIndexToIns([40, 60], 50);

// # 16 Ceasars Cipher

function rot13(str) { // LBH QVQ VG!
  
  var array = str.split('');
  
  
  for (var i = 0; i < array.length; i++) {
    if (array[i] === " " || array[i] === "!" || array[i] === "?" || array[i] === ".") {
      array[i] = array[i];
    }
    else if (array[i].charCodeAt(0) > 77) {
      array[i] = array[i].charCodeAt(0) - 13;
      array[i] = String.fromCharCode(array[i]);
    }
    else if (array[i].charCodeAt(0) <= 77) {
      array[i] = array[i].charCodeAt(0) + 13;
      array[i] = String.fromCharCode(array[i]);
    }
  }
  return array.join('');
}

// Change the inputs below to test
rot13("SERR CVMMN!");