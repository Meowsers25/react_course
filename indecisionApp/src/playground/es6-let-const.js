var nameVar = 'Chris'
var nameVar = 'Luna'
//var lets you redeclare----problematic
console.log('nameVar', nameVar)

let nameLet = 'Katie'
// let nameLet = 'Beatrice'
//let allows you to reasign, but not redeclare. Avoids potential problems
console.log('nameLet', nameLet)

const nameConst = 'Sully'
// const nameConst = 'Gus'
// nameConst = 'Gus'
//const prevents redeclare AND reassign
console.log('nameConst', nameConst)

//let and const are function scoped and block level scoped
var fullName = 'Katie Nichols'

if(fullName){
    let firstName = fullName.split(' ')[0] //example of block scope
    console.log(firstName)
}
console.log(firstName)