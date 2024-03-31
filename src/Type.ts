// console.log("this side mack")
// let nameo:string = "rahul";
// console.log(nameo)

import { boolean, number, string } from "zod"

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

function callbacker(fn:()=>void){
    setTimeout(fn , 2000)
}

function newCaller(){
    console.log("helllo duniya")
}


callbacker(newCaller)

let myClubName : string = "TheXcodingClub"

console.log(myClubName)


// let me write a code for conditional statement in TS

let a:number = 23;

if(a>18){
    console.log("he is mature enough")
} else{ 
    console.log("no go to your home you are not mature as my brother")
}

const identification = {
    "nameo": "Rahul singh",
    rollNo : 34
}

console.log(identification.nameo)


interface User{
    firstName : string,
    age : number,
    
}

function isLegal(user:User){
    if(user.age>23){
        return true;
    }
    else{
        return false;
    }
}
const user = {
    firstName: "rakesh",
    age: 78
};

console.log(isLegal(user));


// arrays in TS




// the below thing can onlu be done using type it cannot be done with the help of interface
type NumberStorage = number[]

function findMax(arr:NumberStorage){
    let maxi = 0;
    for(let i = 0 ; i<arr.length; i++){
        if(arr[i]>maxi){
            maxi = arr[i]
        }
        
    }
    return maxi;
}


console.log("the maximum value will be :" + findMax([100,20,2]))






