/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const numRoman = s;
  let numInt = 0;

  for(let i in numRoman){
    if(numRoman.charAt(i) === "I"){
        numInt++
    }
    if(numRoman.charAt(i) === "V"){
        numInt += 5
        numRoman.charAt(i - 1) === "I" ? numInt -= 2 : true;
    }
    if(numRoman.charAt(i) === "X"){
        numInt += 10
        numRoman.charAt(i - 1) === "I" ? numInt -= 2 : true;
    }
    if(numRoman.charAt(i) === "L"){
        numInt += 50
        numRoman.charAt(i - 1) === "X" ? numInt -= 20 : true;
    }
    if(numRoman.charAt(i) === "C"){
        numInt += 100
        numRoman.charAt(i - 1) === "X" ? numInt -= 20 : true;
    }
    if(numRoman.charAt(i) === "D"){
        numInt += 500
        numRoman.charAt(i - 1) === "C" ? numInt -= 200 : true;
    }
    if(numRoman.charAt(i) === "M"){
        numInt += 1000
        numRoman.charAt(i - 1) === "C" ? numInt -= 200 : true;
    }
  }

  return numInt;
};

console.log(romanToInt("MMMXLV"));
