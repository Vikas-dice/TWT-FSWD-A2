

let arr=[1,2,3,4,5,6,["A","b"],7,8,9,10]


// let rv=arr.map(function fun(maal){
//     console.log(maal)
// })
// console.log(rv)


//reduce 

let rv=arr.reduce(function fun(pv,cv,ci,arr){

    return pv+cv;
})


console.log(rv)

