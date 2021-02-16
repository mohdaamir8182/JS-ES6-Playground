const incomes = [100000 , 4000000 , 43573632];
let total = 0;

//...............ES6......................
for(const income of incomes) {
    console.log("SINGLE INCOME..." , income);
    total += income;
}

console.log("TOTAL....:" , total);