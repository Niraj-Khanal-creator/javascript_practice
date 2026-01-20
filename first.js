// //first 
// console.log("hello");
// console.log("k xa yrr");
// //variables
// //string
// fullname="tony stark";
// //integer
// age=24;
// console.log(fullname);
// console.log(age);
//  //null value
// x=null;
// console.log(x);
// //undefined
// y=undefined; 
// console.log(y);
// //boolean
// isFollow=false; 
// console.log(isFollow);



// //let const var
// var as=10; //old version used before 2015 before es6 was introduced
// let a="tony stark"; //new version after es6 was introduced used in present time
// a=10;
// // const PI=3.14; //constant
// console.log(a);
// // console.log(PI);
// console.log(as);


// //data types
// let b=10;
// let fullName="tony stark";
// //we can create an object  by using const
// const student = { 
//     sfullName:"tony stark",
//     sage:89,
//     cgpa:3,
//     isPass:true, 
// };
// console.log(student);


//create an obj to represent a car
//access any property and display its value in pop up window
//modify any one property of an obj 
//add a new property to your previously defined object
//delete any one propery 
//check any one property exist in your defined object

const car ={    
     brand: "Toyota",
    model: "Corolla",
    year: 2022,
    color: "Red",
    isElectric: false,


};
alert("car brand :"+car.brand);
car.color="mlue";

console.log(car.color);

carisElectric=false;
alert("is car electric:" +carisElectric);

delete car.year;

if ("model" in car) {
    alert("Property 'model' exists in car");
} else {
    alert("Property 'model' does not exist");
}
