

/*

fetch - api - js native - ja native functionality

settimeout, setinterval - js native X - Browser
console.log() - js native ? 

js - ecma internation 
docs - console - js native ?

fetch - url - data 

syntax

fetch('url') 

step 1- bolb data (system bhi smjh nhi skta)
step 2 - json format 


*/


console.log("starting")

async function getmesomedata(url){
    // console.log("chaudhary")
    let data=await fetch(url) //10sec
    // console.log("vikas")
    // for(let i=1;i<=1000;i++){
    //     console.log(i)
    // }
    

    // console.log("dice ")

    let actualdata= await data.json();
    // console.log("academy")


    return actualdata;

}

let rv=getmesomedata('https://randomuser.me/api/')
console.log(rv)


// console.log("end")

//3rd party - axios - data fetch - api end point - direct data - 
