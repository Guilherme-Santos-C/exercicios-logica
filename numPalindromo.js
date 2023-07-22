var isPalindrome = function(x) {
    let string = x;
    const invertString = string.toString().split("").reverse().join("");
    return string == invertString;
};

console.log(isPalindrome(121))
