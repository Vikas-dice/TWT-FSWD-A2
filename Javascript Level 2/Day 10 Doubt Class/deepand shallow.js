

let num1= 100;
let num2=num1;
console.log("num1 -",num1)
console.log("num2 -",num2)

num1=200;
console.log("num1 -",num1)
console.log("num2 -",num2)
console.log("-------------------")

let obj1={
    name:"vikas",
    age:28
}

let obj2=obj1;

console.log("obj1 -",obj1)
console.log("obj2 -",obj2)

obj1.salary=1000;
console.log("obj1 -",obj1)
console.log("obj2 -",obj2)


// 5 ways object - deep clone 

/*
1- rest spread oper
2- object.clone
3- loop 
*/


let arr1=[10,20,30,40]
let arr2=arr1;

console.log("arr1 -",arr1)
console.log("arr2 -",arr2)


arr1[2]="vikas";
console.log("arr1 -",arr1)
console.log("arr2 -",arr2)




//method overlaoding , prop over , method overdingh 
