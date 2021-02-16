//...........var................................
//var has global scope..........

// var num = 10;

// function testing() {

//     var num = 5;
//     console.log("INSIDE:" ,num)
// }

// testing()
// console.log("OUTSIDE...:" ,num)

// //...........let...............................
// //let has block level scope....................

// let num = 10;
// let person = {
//     name : "Aamir",
//     city : "Fsd"
// }

// person = {
//     name : "Ali",
//     city : "Karachi"
// }

// person.age = 25

// function testing() {

//     let num = 5;
//     console.log("INSIDE:" ,num)
// }
// num = 22
// testing()
// console.log("OBJECT...:" ,person)

//...........cinst...............................
//let has block level scope....................

const num = 10;
const person = {
    name : "Aamir",
    city : "Fsd"
}

person.age = 25

function testing() {

    const num = 5;
    console.log("INSIDE:" ,num)
}
testing()
console.log("OBJECT...:" ,person)