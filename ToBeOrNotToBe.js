var expect = function(val) {
    return {
        toBe: (expect) =>{
            if(val === expect) return true;
            throw new Error('Not Equal');
        },
        notToBe: (expect) => {
            if(val !== expect) return true;
            throw new Error('Equal');
        }
    }
};