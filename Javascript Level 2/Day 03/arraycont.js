

let name ="vikas";
console.log(typeof name);

let age =27;
console.log(typeof age);

const fun =function(){
    console.log("i am function expression");
    
}

console.log(typeof fun);

let arr=[10,20,30];
console.log(typeof arr);



let arr2=[10,12.56,true,undefined,null,[100,200,300],function somefun(){
    console.log("i am func statement");
    
},()=>{
    console.log("i am a fat arrow function");
    

},{name:"vikas",age:27}]

console.log(arr2.__proto__);

/*
loop - length (inbuilt)

for of loop
for each -callback func - func - fun pass krdena as a aparameter - hof 



*/


console.log(arr2.length);

for(let element of arr2){
    console.log(element);
    
}


//array - access index 

console.log(arr2[0]);
console.log(arr2[arr2.length-1]);
console.log(arr2[6]());
console.log(arr2[50]);





//array inbuiult methods 

/*
push 
pop
shift 
unshift
slice
splice 



*/

arr2.push(1000);
console.log(arr2);
arr2.pop();
console.log(arr2);


let arr3=[10,20,30,40,50,60]
//slice 

console.log(arr3.slice(2,7)); //param1 - inclusive , param2 - exclusive 
console.log(arr3.slice(2));
console.log(arr3.slice(-2,1));
console.log(arr3.slice(1,-3));
console.log(arr3.slice(-1,-4));

console.log(arr3.slice(1,4,2));

//shift unshift  -push pop

let arr4=[1,2,3,4,5,6,7,8]
// let rv=arr4.shift()
// console.log(rv);


let rv=arr4.unshift(100)
console.log(rv);
// console.log(arr4);


//index of , find 

console.log(arr4.includes(500));
console.log(arr4.indexOf(6));

let arr5=[10,20,30,40,50,60,30,40,30]
console.log(arr5.indexOf(50));
console.log(arr5.indexOf(1000));

console.log(arr5.lastIndexOf(30));



//map filter reduce - asycn js intro , callbacks 













































