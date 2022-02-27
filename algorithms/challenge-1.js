function noOfElements(x, y, z) {
    let result = x.filter(function (returnElements){
     return returnElements >= y && returnElements <= z;
    });
    return result.length; 
}

noOfElements([4,6,2,6,7,7], 0, 7);

module.exports = noOfElements;

