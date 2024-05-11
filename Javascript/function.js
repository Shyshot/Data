// function myFunction(msg){//parameter
//     console.log(msg);
    
// }
// myFunction("Piyush");//argument
// myFunction("Singh");
// function sum(a,b){
//     s=a+b;
//     return s;
    
// }
// let val=sum(5,6);
// console.log(val)\

// const arrowSum=(a,b)=>{
//     console.log(a+b);
// }
// const arrowMult=(a,b)=>{
//     console.log(a*b);
// }

// let vowels=(a)=>{
//     let vow=0;
//     for(const count of a){
//         if(count==="a"||count==="e"||count==="i"||count==="o"||count==="u"){
//             vow++;
//         }
//     }
//     console.log(vow);
// }
// vowels("Piyush");

// let arr=[1,2,3,4,5];
// arr.forEach(function printVal(val){//here value is each element of arrays in order of there index
//     console.log(val);
// })
// let arr=["pune","mumbai","delhi"];
//     arr.forEach((val,idx,arr)=>{
//         console.log(val,idx,arr);
//     })

// let arr=[23,45,67,78,67];
// arr.forEach((val)=>{
//     console.log(`square of ${val} is  ${val*val} `);
// // })
// let nums=[67,87,98]
// let newArr=nums.map((val)=>{
//     return val*2;
// })
// console.log(newArr);

// let nums=[69,58,52,48,69];
// let newArr=nums.filter((val)=>{
//     return val %2===0;
// })
// console.log(newArr);
let arry=[1,2,3,4];
let sum=arry.reduce((res,current)=>{
    return res+ current;
})
console.log(sum);
