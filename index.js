
// # 1 reverse a string
// take a string, turn it into an array
// now that it is an array, we can reverse it
// join it back together
function reverseString(str) {
  return str
  	.split('')
  	.reverse()
  	.join('');
}

reverseString("hello");


// # 2 factorialize a number
// 0! = 1
function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  // 5! = 5 * 4!
  // recursive functions accomplish this
  return num * factorialize(num - 1);
}

factorialize(5);

// # 3 check for palindromes

function palindrome(str) {
  // create a modified string that has no special characters
  var modded = str
  	.toLowerCase()
  	.replace(/[\s&\/\\#,+()$~%.'":*?<>{}_-]/g, '');
  // create the reverse of the modified string
  var reverse = modded
  	.split('')
  	.reverse().join('');
  // check if the modified string and the reverse are equialent
  return modded === reverse;
}



palindrome("eye");

// # 4 Find the longest word in a string

function findLongestWord(str) {
  // create an array of all the words in the string
  var array = str.split(' ');
  // create an accumulator to hold the length of the longest word
  var acc = 0;
  // loop through our array of words
  // if the length of the word at index i is greater than acc, replace acc with word length
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
        // now that the words are in an array we can map them
        // map each word to a new word
        // the new word is the old word with the first letter capitalized
        .map(function(word) {
            return word[0].toUpperCase() + word.substr(1);
        })
        .join(' ');
}


titleCase("I'm a little tea pot");

// # 6 Return largest numbers in array

// Function to sort numerically
// sort doesnt sort numbers in an ideal manner
function sortNumber(a,b) {
    return a - b;
}

function largestOfFour(arr) {
  // Create an accum, and push the largest number in each array
  // Do this by looping through array and sorting sub arrays
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
  // Use substring that takes the last n letters of a string
  // n = the length of the target word
  // comparison of our substring and the target
  return str.substring(str.length, str.length - target.length) === target;
}

confirmEnding("Bastian", "n");

// # 8 Repeat a string repeat a string


function repeatStringNumTimes(str, num) {
  // code that returns a blank string if number is < 1
  if (num < 1) {
    return "";
  }
  // accumulator variable
  var repeat = "";
  // repeat the string by looping
  // each loop, the acc becomes acc + string
  for (var i = 0; i < num; i++) {
    repeat = repeat + str;
  }
  return repeat;
}

repeatStringNumTimes("abc", 3);

// # 9 Truncate a string


function truncateString(str, num) {
  // Use slice to truncate words. num = total number of characters
  // if num and word > 3, then use only first num - 3 letters, and add ...
  if (str.length > num && num > 3) {
    return str.slice(0, num - 3) + "...";
  }
  // if word > num and num < 4, truncate first num letters and add ..
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
  // use a loop within a loop
  //first build outer loop. i increases by size of chunk
  for (var i = 0; i < arr.length; i += size) {
  	// accumulator for smaller array
    var smallArr = [];
    //inner loop pushes array element at index i + j
    for (var j = 0; j < size && i + j < arr.length; j++) {
      smallArr.push(arr[i + j]);
    }
    result.push(smallArr);
  }
  return result;
}

// running chunk wiht a single loop
function easyChunk(arr, size) {
	var result = [];

	for (var i = 0; i < arr.length, i += size) {
		result.push(arr.slice(i, i + size));
	}
	return result;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);

// # 11 Slasher Flick

function slasher(arr, howMany) {
  // howMany is how many items are removed
  // If you remove more items than are in the array, return an empty array
  if (howMany > arr.length) {
    return [];
  }
  // remove the first n items from the array
  if (howMany < arr.length) {
    return arr.slice(howMany - arr.length);
  }
}

slasher([1, 2, 3], 2);

// # 12 Mutations

function mutation(arr) {
  // element one = first item of array in lower case
  // element two = second item of array turned into an array of letters
  var elementOne = arr[0].toLowerCase();
  var elementTwo = arr[1].toLowerCase().split('');
  // accumulator starts at true value
  var acc = true;
  // loop through element two
  //if letter from element two is not in element one, set acc to false
  for (var i = 0; i < elementTwo.length; i++) {
    if (elementOne.indexOf(elTwo[i]) === -1) {
      acc = false;
    }
  }
  return acc;
}


mutation(["mary", "army"]);

// # 13 Falsy Bouncer


function bouncer(arr) {
  // new function that determines if an element falsy
  function isTrue(element) {
    return (Boolean(element));
  }
  // filter out falsy  values
  var newArray = arr.filter(isTrue);
  return newArray;
}

bouncer([7, "ate", "", false, 9]);

// # 14 Seek and Destroy

function destroyer(arr, ...args) {
  // use ...args to call out the arguments of a function
  // define notSame for filter
  // not same checks if an element does not equal argument at i
  function notSame(element) {
    return element !== args[i];
  }
 // filter through args, removing similar values 
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
  // sort by numbers
  function sortNumber(a,b) {
    return a - b;
}
  var sorted = arr.sort(sortNumber);
  
  // place num before number directly above it
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
  // split string into an array so we can loop over each item
  var array = str.split('');
  
  
  for (var i = 0; i < array.length; i++) {
  	// if the character at index i is punctuation, leave as is
    if (array[i] === " " || array[i] === "!" || array[i] === "?" || array[i] === ".") {
      array[i] = array[i];
    }
    // if character at index i has unicode greater than 77, subtract 13
    // replace character at index i with modified character
    else if (array[i].charCodeAt(0) > 77) {
      array[i] = array[i].charCodeAt(0) - 13;
      array[i] = String.fromCharCode(array[i]);
    }
    // same as above but add 13 for characters with unicode less than 77
    else if (array[i].charCodeAt(0) <= 77) {
      array[i] = array[i].charCodeAt(0) + 13;
      array[i] = String.fromCharCode(array[i]);
    }
  }
  return array.join('');
}

// Change the inputs below to test
rot13("SERR CVMMN!");