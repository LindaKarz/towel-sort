
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let result = []
    let newArr = []
    if (typeof(matrix) == 'undefined') return(result)
    matrix.forEach((i,index) => {
        if ((index+1) % 2 == 0) i.reverse();
        newArr += `${result}${i},`;
    });
    if (newArr.length == 0) return(newArr)
    if (newArr.length !== 0) {
        result = newArr.slice(0, -1).split(',')
        return(result)
    }
}