function replaceDivisible(x, y) {
    let arr = [];
    for (let i = 0; i < x.length; i++) {
        if (x[i] % y === 0 ) {
            x[i] = "isDivisible";
            
        }
    }
    return arr;
}
replaceDivisible([2,4,3,6,5], 3);
module.exports = replaceDivisible
cd