

/*
syntax 

Promise - prototype , class 




*/


let promise1=new Promise((resolve, reject)=>{

    // resolve("mujhe chips de dia gya h")
    // reject("nahi h chips mere paas")
    // resolve("chips 1")
    // resolve("chips 2")
    // resolve("chips 3")

    reject("no chips")
    // reject("no chips 2")

})

console.log(promise1)
// promise1.then(function(maal){
//     console.log(maal)
// })

// promise1.catch(function(maal){
//     console.log(maal)
// })

// promise1.then(function(maal){
//   console.log(maal)
// })
// promise1.then(function(maal){
//     console.log(maal)
// })
// promise1.then(function (maal3){
//     console.log(maal3)
// })

// promise1.catch(function(maal){
//     console.log(maal)
// })
// promise1.catch(function(error){
//     console.log(error)
// })


//chain - then catch chaining 


// promise1.then(function(maal){
//     console.log(maal)
// }).catch(function(error){
//     console.log(error)
// })




/*

promises issues 

promises hell 

resolve

async await 







*/


/*

asycn function(){

await - 

}


*/



async function getdata(){
    console.log("vikas")

    let data=await fetch('https://randomuser.me/api/')
    for(let i=1;i<=10000;i++){
        console.log(i)
    }
    let actualdata=await data.json()
    console.log("chaudhary")

    console.log(actualdata.results[0])

    console.log("dice academy")


    
}


getdata();
