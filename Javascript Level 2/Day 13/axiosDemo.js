


// import axios from 'axios';


// async function getdata(url){
//     console.log("vikas")
//     let response = await axios.get(url);

//     console.log(response.data)

//     console.log("chaudhary")

// }

// getdata( 'https://randomuser.me/api/')





async function getcatdata(){

    let bolbdata=await fetch('https://catfact.ninja/fact');

    console.log(bolbdata)

    let actualdata= await bolbdata.json();

    return actualdata;
}


let finalans=getcatdata();

console.log(finalans)