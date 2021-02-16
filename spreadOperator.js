//It unwraps the values of an array/object into a new array object.

//................FOR ARRAYS.......................

const oldArray = [1,2,3,4,5];

console.log("OLD ARRAY....:" , oldArray);

//Now check spread operator ....

const newArray = [...oldArray , 6,7,8];

console.log("NEW ARRAY....:" , newArray);

//......................FOR OBJECTS.............................

const oldAddress = {
        firstName : "Aamir",
        lastName : "Mahmood",
        city : "Faisalabad"
    }

console.log("OLD ADDRESS" , oldAddress)

const newAddress = {
    ...oldAddress,
    country : "Pakistan"
}

console.log("NEW ADDRESS....:" , newAddress)