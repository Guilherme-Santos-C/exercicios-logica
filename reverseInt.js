var reverse = function(x) {
    let string = x.toString().split("");
    if(string[0] == "-"){
        string.shift()
        let num = "-" + string.reverse().join("")
        return num++;
    }
    let reverseString = string.reverse().join("");
    return reverseString++;
};

reverse(-123)