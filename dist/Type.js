"use strict";
// console.log("this side mack")
// let nameo:string = "rahul";
// console.log(nameo)
Object.defineProperty(exports, "__esModule", { value: true });
// const sum = (a:number , b:number)=>{
//     return a+b;
// }
// console.log(sum(2,3));
// call back function using typescript
// function caller(fn:()=>number){
//     return 1;
// }
// function non_caller(caller){
//     console.log(caller())
// }
// non_caller(caller)
function callbacker(fn) {
    setTimeout(fn, 2000);
}
function newCaller() {
    console.log("helllo duniya");
}
callbacker(newCaller);
let myClubName = "TheXcodingClub";
console.log(myClubName);
// let me write a code for conditional statement in TS
let a = 23;
if (a > 18) {
    console.log("he is mature enough");
}
else {
    console.log("no go to your home you are not mature as my brother");
}
