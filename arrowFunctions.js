//Arrow function are functions with less boilerpalate code 
//as compare to regular js functions.

//......REGULAR FUNCTION.........

function addRegular(arr){

    let total = arr.reduce(function name(x ,y) {
        return x + y;
    })

    console.log("TOTAL....:" , total)

}

//add([1,2,3])

//.................ES6...................

const add = arr => {
    let total = arr.reduce((x , y) => x+y);
    console.log("TOTAL....:" , total)
}

add([1,2,3,4])