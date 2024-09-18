

// /*

// [2,4,1,8,5,10,9,-6]

// max elt?]
// min elt ?
// span = max-min;

// traverse 







// */

// let arr=[1,4,5,3,9,10];

// // console.log(arr.__proto__);

// /*
// 1- loop
// 2- while
// 3-do while


// 4- foreach - callback func
// 5-for of 


// */

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
    

// }


// let i=0;
// while(i<arr.length){
//     console.log(arr[i]);
//     i++;
    
// }
// let ii=0;
// do{
//     console.log(arr[ii]);
//     ii++;
    
// }while(i<arr.length);




// console.log("----------------------------------");



// let arr2=[10,20,30,40,50,60];

// for(let maal of arr2){
//     console.log(maal);
    
// }





// let arr3=[100,200,300,400,500]
// // arr3.forEach(function(maal){
// //     console.log(maal);
    
// // })

// arr3.forEach((maal)=>{
//     console.log(maal);
    
// })


let arr=[3,1,5,4,10,9,23,15];

let max=arr[0];
let min=arr[0];

for(let i=1;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i]
    }
    if(arr[i]<min){
        min=arr[i]
    }


    
}

console.log(max,min);
console.log(max-min);






