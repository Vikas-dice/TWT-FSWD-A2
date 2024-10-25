


// async function  getcatdata() {

//     let bolbdata = await fetch("https://catfact.ninja/fact");

//     let actualdata= await bolbdata.json();



//     return actualdata.fact;
    
// }

// let ans=getcatdata();

// console.log(ans)

let mypromise = new Promise((resolve , reject)=>{

    async function getcatdat(){
        let bolbdata=  await fetch('https://catfact.ninja/fact')

        let actualdata=await bolbdata.json();

        console.log(actualdata)
    
       

    }


    resolve(getcatdat())

    


  















})

mypromise.then(function(maal){
    console.log(maal)
})
