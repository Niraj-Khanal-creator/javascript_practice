// console.log("practice");
// let a = prompt("enter a number");
// console.log(a);
// if(a%2===0){
//     console.log(a," is even number");
// }
// else{
//      console.log(a," is odd number");
// }
// const student ={
//     name:"paras adhikari",
//     subject:"software engineering",
//     age:17,
//     cgpa:6.6,
// };
// console.log(student);
// if (student.cgpa > 4 || student.cgpa < 0) {
//     console.log("Invalid CGPA! Enter CGPA between 0 and 4");
// }
// if (student["cgpa"]>3.6&&student["cgpa"]<=4){
//     console.log("A+");
// }
//  else if (student["cgpa"]>3.2&&student["cgpa"]<=3.6){
//      console.log("A");
// }
//  else if (student["cgpa"]>3.2&&student["cgpa"]<=3.6){
//      console.log("A");
// }
//  else if (student["cgpa"]>2.8&&student["cgpa"]<=3.2){
//      console.log("b+");
// }
//  else if (student["cgpa"]>2.4&&student["cgpa"]<=2.8){
//      console.log("b");
// }
//  else if (student["cgpa"]>2.0&&student["cgpa"]<=2.4){
//      console.log("c+");
// }
//  else if (student["cgpa"]>1.6&&student["cgpa"]<=2.0){
//      console.log("c");
// }
// else{ 
//     console.log("fail");
// }

// //looop in js 
// let k;
// for(k=0;k<5;k++){
//     console.log("hello world!");
// }
// for(k=0;k<5;k++){
//     console.log(k);
// }


// // sum of natural number
// let num=prompt("enter a number");
// console.log("the number is ",num);
// let sum=0;
// let i;
// for(let i=1; i<num; i++){
//    sum=sum+i;
// }
// console.log(`the sum up to  number ${num} is:`,sum);

// //even numbers up to 100:
// let j=0;
// while (j<=100){
//     console.log("even number:",j);
//     j=j+2;
// }

// // guess game 
// let initNum=20;
// let guessNum=prompt("geuss your number");
// if(guessNum!==initNum)
// {
//     prompt("wrong guess try aagain");
// }
// console.log("congratulation you passed you guessed the number");
// // user name creation
// let str1="nirajkhanal";
// let username="@"+str1+"str1.length";
// console.log(username);

//average marks array 
let marks=[90,39,35,78,99];
let sum=0;
let m;
for(m=0;m<marks.length;m++){
sum=sum+marks[m]; 
}
console.log(sum); 
let average=sum/marks.length;
console.log(average);




