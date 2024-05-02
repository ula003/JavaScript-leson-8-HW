const arr = [1,2,3,4,5,6, false, 'hello world', 'yellow', {number: 112, age:108}, true]
const numbers = arr.filter((item) => isNaN(item) === false)
if(numbers.length > 5){
    alert('good')
}gi