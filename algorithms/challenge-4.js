function highestSum(x, y) {
    let sumX = 0;
    let sumY = 0;
    for (let i = 0; i < x.length; i++) {
        sumX += x[i];
    };
    for (let j = 0; j < y.length; j++) {
        sumY += y[j];
    };
    if (sumX > sumY) {
        return sumX
    } else {
        return sumY;
    }
}
highestSum([2,5,1,0,5,7], [2,3,5,6,2,1]);
module.exports = highestSum