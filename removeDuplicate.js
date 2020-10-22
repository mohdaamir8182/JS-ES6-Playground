const arr = [1,2,3,3,3];
const newArr = [];

const deleteDup = () => {
  
//    return arr.filter((data,index)=>{
//         return arr.indexOf(data) === index;
//       })

    arr.forEach((item , index) => {
        if(!newArr.includes(item)){
            newArr.push(item)
        }
    });

    return newArr;
  
}

console.log(deleteDup())