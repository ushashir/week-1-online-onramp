function divisible(a) {
    let result = a.filter(function (returnElements) {
        return returnElements % 2 === 0 && returnElements > 15;
       });
    return result.length;
}

module.exports = divisible;


