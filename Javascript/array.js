let marks=[85,97,44,37,76,60];
console.log(marks);
// for(idx=0;idx<marks.length;idx++){
//     console.log(marks[idx]);
// }

//for of
// for(let mark of marks){
//     console.log(mark);
// }
// console.log("Marks are visible");
// let sum=0;
// for(let val of marks){
//     sum += val;
// }
// let avg=sum/marks.length
// console.log(`The average marks of student is ${avg}`);

let item=[250,645,300,900,50];
let offerVal=[];
let idx=0;
 for(let val of item){
    let offer=val/10;
    offerVal[idx]=item[idx]-offer;
    console.log(`\nThe price of item no ${idx+1} Before offer is ${val}`);
    console.log(`The price of item no ${idx+1} After offer is ${offerVal[idx]}`);
    idx++;

 }