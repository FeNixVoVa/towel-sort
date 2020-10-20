
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        let middleArray = matrix[i];
        if (i % 2) {
            for (let j = middleArray.length; j > 0; j--) {
                result.push(middleArray[j - 1]);
            }
        } else {
            for (let j = 0; j < middleArray.length; j++) {
                result.push(middleArray[j]);
            }
        }
    }
    return result;
}
