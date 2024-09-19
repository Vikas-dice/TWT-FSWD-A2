

let name="vikas";
let age=27;
let salary=10000;
let ismarried =false;
let marks =55.55;


//object - syntax 
/*

{
key:value
}


*/

let vikaskidetails={
    "name":"vikas",
    name:"rohan",
    age:27,
    salary:10000,
    ismarried:false,
    marks:55.55
   
}

//access 

console.log("-----------------");





console.log(vikaskidetails.name);
console.log(vikaskidetails["name"]);








console.log(vikaskidetails.age);
console.log(vikaskidetails.salary);
console.log(vikaskidetails.marks);
console.log(vikaskidetails["age"]);
console.log(vikaskidetails["name"]);
console.log(vikaskidetails["salaryy"]);

//traverse - loop (for in)


for(let maal in vikaskidetails){
    console.log(vikaskidetails[maal]);
    
}
vikaskidetails.education="btech";
console.log(vikaskidetails);

























