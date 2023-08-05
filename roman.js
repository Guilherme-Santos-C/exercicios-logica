function roman(s){
    const romanValues = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }
    let numInt = 0; 
    for(let i = 0; i < s.length ; i++){
        let currValue = romanValues[s[i]];
        let nextValue = romanValues[s[i+1]];
        if(nextValue > currValue){
            numInt += nextValue - currValue;
            i++
        }else{
            numInt += currValue;
        }
    }
    return numInt;
}

roman("CXL")