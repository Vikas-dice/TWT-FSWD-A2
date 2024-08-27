


// console.log("vikas");


//js - es 5 and es 6 

//es 5 - function statment , func expression , anaonymous , return , with params



//1 func statment

// function sayMyName(){
//     console.log("VIKAS");

// }

// sayMyName();
// sayMyName();
// sayMyName();
// sayMyName();
// sayMyName();
// sayMyName();

//2 FUN EXPRESSION - 


// let age =27;
// let name="vikas";
// let ismarried = false;


// let myfun=function saymyname(){
//     console.log("vikas");
    
// }

// // saymyname();
// myfun();


//3- anonymous 


// let myfun=function(){
//     console.log("vikas chaudhary");
    

// }
    

// myfun();



// let rv=console.log("vikas")
// console.log(rv);


// function saymyname(){
//     console.log("vikas");
    
// }


// let rv=saymyname()
// console.log(rv);





//funcs with parameters


// let myfun=function (name,age,ismarried){
//     console.log("my name is ",name+" "+"my age is "+age+" "+"i am married -",ismarried);
    

// }



// // sayHello("vikas",27)
// // sayHello("rohan",17)

// // myfun("rohan",17)
// // myfun("puneet",28)

// // myfun(27,"vikas")

// myfun("vikas",27,false)
// myfun("vikas",27)
// myfun("puneet",28,true,"jai shree ram")




// function saymyname(){
//     console.log("hello world");
//     return function(){
//         console.log("i am a fun");
//         return "amanjot madam"
        
//     }
//     console.log("hello dunia");
    
    
// }

// let rv=saymyname();
// console.log(rv());




//pattern with function

// function print1(num1){
//     for(let i=0;i<num1;i++){
//     let row="";
//         for(let j=0;j<num1;j++){
//    if(row==0 || row==num1-1 || j==0 || j==num1-1){
//   row+="* "
//    }
//    else{
//     row+=" ";
//    }
 
//         }
//         console.log(row);
//     }
// }

// print1(10);




//holloow rectangle




function printhollowrectangle(n){
    
for(let row =1;row<=n;row++){

    for(let col=1;col<=n;col++){
        if((row>1 && row<n) && (col>1 && col<n)){
            process.stdout.write(" ")

        }else{
            process.stdout.write("*")

        }
       
    }
    console.log();
    

}

}

printhollowrectangle(10)

printhollowrectangle(20)










