//EXAMPLE 1

//.....Old js .... Always we name to define key/values while making objects....

// function addressMaker(firstName , lastName , city){
    // const newAddress = {
    //     firstName : firstName,
    //     lastName : lastName,
    //     city : city
    // }

//     console.log("NEW ADDRESS..:" , newAddress);
// }

// addressMaker("Aamir" , "MAhmood" , "Faisalabad");

//........................ES6.............................//
//if parameters name and keys name are same then we dont need to mention
//the keys it will automatically name the keys as below code

// function addressMaker(firstName , lastName , city){
//     const newAddress = {
//         firstName,
//         lastName,
//         city
//     }

//     console.log("NEW ADDRESS..:" , newAddress);
// }

// addressMaker("Aamir" , "MAhmood" , "Faisalabad");

//............................CHALLENGE..................................
//Use object literals and destructuring in the example Below.

// function addressMaker(address){
//     const newAddress = {
//         firstName : address.firstName,
//         lastName : address.lastName,
//         city : address.city
//     }
// }

// addressMaker({firstName : firstName, lastName : lastName, city : city});

//..........................SOLUTION..........................................

function addressMaker(address){

    //Destructure object
    const {firstName , lastName , city} = address;

    //Use object literal as the key names and parameter names are same
    const newAddress = {
        firstName,
        lastName,
        city
    }

    console.log("NEW ADDRESS..:" , newAddress);
}

addressMaker({firstName : "Aamir", lastName : "Mahmood", city : "Faisalabad"});