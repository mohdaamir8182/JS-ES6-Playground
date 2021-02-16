//High order functions are functions that return another function on their execution.

//forEach() ..... map() ....... filter() ...... reduce().......

//...................reduce.........................
//method reduces the array to a single value.......

const dataArray = [1,2,3,2,3,4,5,6];

const runReduce = () => {
    let res = dataArray.reduce((x , y) => {
        return x+y;
    });
    console.log("REDUCE RESULT.....:" , res);
}

runReduce()

//..................forEach........................

const runForeach = () => {
    let total = 0;
    dataArray.forEach((data) => {
        total += data;
    })

    console.log("FOREACH RESULT....:" , total)
}

runForeach()

//.........................Filter..........................

const runFilter = () => {
    return dataArray.filter((data , i) => {
        return dataArray.indexOf(data) === i;
    });
}

console.log("RUN FILTER...:" , runFilter())

//......................map.............................

const runMap = () => {
    return dataArray.map((data , i) => {
        return data+i;
    })
}

console.log("RUN MAP......" , runMap())