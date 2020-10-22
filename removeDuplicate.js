//********************DELETE DUPLICATES FROM AN ARRAY*************************

const arr = [1,2,3,3,3];
const newArr = [];

const deleteDup = () => {

    //METHOD 1
  
   return arr.filter((data,index)=>{
        return arr.indexOf(data) === index;
      })

    //METHOD 2

    arr.forEach((item , index) => {
        if(!newArr.includes(item)){
            newArr.push(item)
        }
    });

    return newArr;
  
}

console.log(deleteDup())