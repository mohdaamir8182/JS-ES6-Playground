//If the number of arguments are not known then rest operator gives us the 
//all the arguments in the form of array list.
//Check the example below 

const add = (...params) => {

    let total = 0;
    for(const param of params){
        total += param;
    }
    console.log("Arguments....:" , params);
    console.log("TOTAL....:" , total)

}

add(1,2,3,4,5)