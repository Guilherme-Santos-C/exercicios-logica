var createCounter = function(n) {
    let numero = n;
    let chamada = false;
    return function() {
        if(!chamada){
            chamada = true;
            return numero;
        };

        numero++
        return numero;
    };
};

const Fn = createCounter(4);

// https://leetcode.com/problems/counter/



