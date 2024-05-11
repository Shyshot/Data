const college = {
    FeeStruc(){
        console.log("Fees is 120000");
    },

};

const student = {
    Name: "piyush",
    marks: 96,
    subject : ["physics", "chemistry", "maths"],
}
student.__proto__ = college ;

// class car{
//     constructor(brand, milage){  
//         console.log(`Creating ${brand}`);
//         console.log(`Milage will be ${milage}`);
//         this.brand = brand;
//         this.milage = milage;
//     }
//     start(){
//         console.log(`start`);
//     }
//     stop(){
//         console.log(`stop`);
//     }

// }

// let fortuner = new car("fortuner",10);
// console.log(fortuner);
// fortuner.stop();
// let lexus = new car("lexus",5);
// console.log(lexus);
// lexus.start();

// class Person {
//     constructor(name){
//         console.log(`Parent contructor`)
//         this.name = name
//         this.species = "homo Sapiens";

//     }
//     eat(){
//         console.log("I can eat");
//     }
// };

// class developer extends Person{
//     constructor(name,branch){
//         console.log(`Child contructor`)
//         super();  //This is invoke parent class comnstructor
//         this.branch = branch;
//         console.log(`Child contructor Over`)
//     }
//     develop(){
//         eat();
//         console.log("I can develop");
//     }
// };

// let piyush = new developer("Piyush","Chemical");






// class User{
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//         console.log(`Hii ${name}`)
//     }
//     viewData(name,email){
//         this.email = email;
//         console.log(`You are able to view the Website data`);
//         console.log(`Your Email is ${email}`);
//     }
// }

//  let piyush = new User("Piyush","abc@gmail.com");