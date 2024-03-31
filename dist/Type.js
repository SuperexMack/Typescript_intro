"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function callbacker(fn) {
    setTimeout(fn, 2000);
}
function newCaller() {
    console.log("helllo duniya");
}
callbacker(newCaller);
let myClubName = "TheXcodingClub";
console.log(myClubName);
let a = 23;
if (a > 18) {
    console.log("he is mature enough");
}
else {
    console.log("no go to your home you are not mature as my brother");
}
const identification = {
    "nameo": "Rahul singh",
    rollNo: 34
};
console.log(identification.nameo);
function isLegal(user) {
    if (user.age > 23) {
        return true;
    }
    else {
        return false;
    }
}
const user = {
    firstName: "rakesh",
    age: 78
};
console.log(isLegal(user));
function findMax(arr) {
    let maxi = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxi) {
            maxi = arr[i];
        }
    }
    return maxi;
}
console.log("the maximum value will be :" + findMax([100, 20, 2]));
