console.log(this);

/*
case 1 - global - this keyword - window object 
case 2  - object - es5 function - this - parent object
case 3 -object - es6 function - this - {}
case 4 -












*/


// let objP={
//     name:"vikas",
//     age:27,
//     address:"delhi",
//     details:function (){
//         console.log(this);
//         return "dice"
        
//     }
// }
// console.log(objP.details());


// let objP={
//     name:"vikas",
//     age:27,
//     address:"delhi",
//     details:()=>{
//         console.log(this);
        
//     }
// }


// console.log(objP.details());









// let objP={
//     name:"vikas",
//     age:27,
//     address:"delhi",
//     detailsP:function parent(){
//         console.log("i am a parent function");

//         function child(){
//             console.log(this);
            
//         }
//         child();
        
//     }
// }
// console.log("---------------------------");

// console.log(objP.detailsP());








// let objP={
//     name:"vikas",
//     age:27,
//     address:"delhi",
//     detailsP:function parent(){
//         console.log("i am a parent function");

//        const child=()=>{
//         console.log(this);
        
//        }
//         child();
        
//     }
// }
// console.log("---------------------------");

// console.log(objP.detailsP());







// let objP={
//     name:"vikas",
//     age:27,
//     address:"delhi",
//     detailsP:()=>{
//         const child=()=>{
//             console.log(this);
            
//         }
//         child();

//     }
// }







// console.log("-------------------------");

// console.log(objP.detailsP());




let objP={
    name:"vikas",
    age:27,
    address:"delhi",
    detailsP:()=>{
        function child(){
            console.log(this);
            
        }
        child();

    }
}

console.log("---------------------");
console.log(objP.detailsP());
    








// let obj={
//     name:"vikas",
//     age:27,
//     address:"delhi",
//     Education:"bTECH",
//     salary:10000
// }

// console.log(this.name);
// console.log(obj.name);

// function sayMyDetails(obj){

//     console.log(this.name);
    
// }

// sayMyDetails(obj)


// const details=(obj)=>{
//     console.log(this.name);
    
// }


// details(obj);







