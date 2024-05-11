// for loop

// for(let i=1; i<=5;i++){


// let i=1 : initiliation value
// let i<=5 : stoppting condition 
// i++ :updation can also be written as i=i+1
// console.log("Apna College");
// }
// console.log("Loop has ended");


//use of loop:

// let sum=0;
// for(let i=1; i<=5; i++){
//     sum=sum+i;
//     console.log("sum1=",sum)
// }
// console.log("sum=",sum);
// console.log("loop has ended");

// While loop

/* syntax is:
 while(condition){
     code to be executed
 }
 the code which is to be excuted will also consist of the updation value the condition will contain the stopping value 
 and the initiliation value will be mentioned earlier in the code*/

//  let i=1;
//  while(i<=5){
//      console.log("Piyush singh");
//      i++;
//  }

// do-while Loop

/*Syntax is:
 do{
     code to be executed
 }while(Condition)
 
 The do while loop will atleast work once even if the first condtion is false */

//  let i=20;
//  do
// {
//     console.log("Piyush kumar");
//     i++;
// }while(i<=5);

//For of loop 
/* Used to apply loop on string and arrays
The syntax is:
 for(let val of strVar){
     code to be executed
 }
 Here val is variable and strVar is string value also called as the iterator --> characters
 There is no need of initilazation stopping or updation for of loop will take care of all
  */
//  let str="Piyush";
// let size=0;

//  for(let i of str){
//      console.log(i)
//      size++;
//  }
//  console.log("The string has",size,"Characters")

// For in loop
/* Applied on objects and arrays
The syntax is
 for(let key in ObjVar){
     code to be executed
 }
 Here key is variable and ObjVar is Object value also called as the iterator --> characters
 There is no need of initilazation stopping or updation for of loop will take care of all
*/

let student={
    Fullname:"Piyush kumar",
    age:20,
    cgpa:9.7,
    ispass: true,
};
for(let key in student){
    console.log(key,"=",student[key]);
}
