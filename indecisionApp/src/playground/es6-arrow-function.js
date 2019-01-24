const square = function(x){
    return x * x
}
console.log(square(8))

// const squareArrow = (x) => {
    // return x * x
// }
// console.log(squareArrow(3))

//same as above arrow function
//able to use this syntax because it returns one expression
const squareArrow = (x) => x * x
console.log(squareArrow(4))

// const getFirstName = (name) => {
    // return name.split(' ')[0]
// }
// console.log(getFirstName('Katie Nichols'))

const getFirstName = (name) => name.split(' ')[0]
console.log(getFirstName('Chris Lamothe'))