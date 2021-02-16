const person = {
    firstName : "Aamir",
    lastName : "Mahmood",
    city : "Faisalabad"
}

//old js

//console.log("FIRST NAME...:" , person.firstName)

//ES6

const {firstName , lastName , city} = person

console.log("FIRST NAME...:" , firstName)