


console.log("or oper ||");
console.log(true || true); //1+1=2=non zero= true
console.log(true || false); //1+0=1=true
console.log(false || true); //0+1=1=trye
console.log(false||false);//0+0=0=false

console.log("and opern && - mult");
console.log(true && true); //1*1=1= true
console.log(true && false); //1*0=0=false
console.log(false&&true); //0*1=0=false
console.log(false&&false);//0*0=0=false

console.log("not oper - !");
console.log(!true);
console.log(!false);
console.log(!5);

// console.log(5>>2); // 
// console.log(5<<2);




//es 5 es 6 
/*
es 5
func statement


expression 
anynomous
fun with params 
func with return 


es6 func
fat arrow fow
fat arrow with one param
fat arrow woth retrn 
fat arrow with mul params
fat arrow with implicit return 










*/







const a=function fun(){
    console.log("i am func statment");
    
}
// fun();
a();


const b =function(){
    console.log("i am anonymous");
    
}

b();


const mydetails=function mydetails(name,age , salary, address){
    console.log(name,age,salary,address);
    
}

mydetails("vikas",28,10000,"delhi")










const c=function sum(a,b){
    return function(){
        console.log("i am anonymous");
        return "hello"
        
    }
}

let rv=c(100,200);
console.log(rv());



//es6 

const d=()=>{
    console.log("i am a fat arrow func");
    
}

d();



const e =name=>console.log("my name is ",name);
    


e("rohan")


const f=(name,age,salary,address)=>console.log(name,age,salary,address);

  
    

f("rohan",28,100000,"delhi")




const g=()=>{
    return "hello world"
}




let rv2=g()
console.log(rv2);


const h=()=>"hey";
let rv3=h();
console.log(rv3);









function fname(params){
    //body
}

//es6
(params)=>{
    //body
}

//armstrong number 

/*
153 
1 ki power 3+ 5 ki power 3 + 3 ki power 3 = 153

1+125+27=153



*/



/*
step 1 - nod 
step 2 - check sum



*/
// let count=0;
// function nod(num){
   
//     num=Math.floor(num/10);
//     count++;


//     return count;

// }

// let rv4=nod(153);
// console.log(rv4);
