//Default params are very good include in the es6. Default params are the
//values that we can assign to our parameters to ovverride the error when no 
//argument is provided on function call.

//If the number of arguments are not known then rest operator gives us the 
//all the arguments in the form of array list.
//Check the example below 

const add = (params = [1,2]) => {

    let total = 0;

    for(const param of params){
        total += param;
    }

    console.log("TOTAL....:" , total)

}

add([1,2,3])

add()