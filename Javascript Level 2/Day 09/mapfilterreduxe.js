

/*

inbuilt method - array - prototype

map 
filter 
reduce

terms - callbacks 




*/

let arr=[10,20,30,"vikas",{a:100,b:200},10000];

//map method 

// let rv=arr.map(function(value,index,array){
//     console.log(value)
// })
// console.log(rv)


// arr.map((maal,index,array)=>{
//     // console.log(value)
//     // console.log(index)
//     console.log(maal)
//     // console.log(array)
// })


// arr.map((index,element,array)=>{
//     console.log(index)
// })


//filter method 

// let arr2=[1,2,3,4,5,6,7,8,9,10]
// let rv=arr2.filter(function(maal){
//     // console.log(maal)
//     return maal<5;
    
// })
// console.log(rv)

// let ages=[10,12,14,15,30,35,40,41,56];

// let rv=ages.filter((maal)=>{
//     return maal%2==0;
// })
// console.log(rv)


//reduce 

let arr4=[10,20,30,40,50,60];

let ans=arr4.reduce(function(cv,ci){
    // console.log("----",index)
    return cv+ci;
})

console.log(ans)


// arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

//even nums sum - console


