//arguments object no longer bound with arow functions
const add = function(a, b){
    console.log(arguments)//works es5
    return a + b
}
console.log(add(55, 1, 1001))

const adds = (a, b) => {
    // console.log(arguments) doesn't work es6
    return a + b
}
console.log(adds(55, 1))

//this keyword no longer bound
// const user = {
//     name: 'Chris',
//     cities: ['Providence', 'Warwick', 'Pawtucket'],
//     printPlacesLived: function(){
//         this.cities.forEach((city) => {
//             console.log(this.name + ' has lived in ' + city)
//         })
//     }
// }
// user.printPlacesLived()

const user = {
    name: 'Chris',
    cities: ['Providence', 'Warwick', 'Pawtucket'],
    printPlacesLived(){
        return this.cities.map((city) => this.name + ' has lived in ' + city)
    }
}
console.log(user.printPlacesLived())

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((num) => this.multiplyBy * num)
    }
}
console.log(multiplier.multiply())

