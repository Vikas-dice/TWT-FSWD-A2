

// class A{
//     naam;
//     age;
//     constructor(name,age){
//         this.naam=name;
//         this.age=age;
//     }

//     area(){
//         return"some area"
//     }



// }

// // let a1 = new A("VIKAS",27)
// // console.log(a1)


// class B extends A{

//     constructor(name,age){
//         super()
//         this.naam="puneet"; //signture=
//         this.age=age;

//     }

//     area(){
//         return "some more area"
//     }
   



// }

// let b1 = new B("ROHAN",30)
// console.log(b1.area())



//access modifier

// class A{
//     naam;
//     umar;
//     #salary;

//     constructor(name,age,salary){
//         this.naam=name;
//         this.umar=age;
//         this.#salary=salary;
//     }
// }
// // let a1 = new A("VIKAS",28,10000);
// // console.log(a1)

// class B extends A{


//     constructor(name,age,salary){
//         super();
//         this.naam=name;
//         this.umar=age;
//         this.salary=salary;
//     }
// }


// let b1 = new B("ROHAN",30,100000);
// console.log(b1)
// // public , private , protected 
// //js - protected X
// //public

class A{
    A;
    #B; //private - #
    C;
    constructor(A,B,C){
        this.A=A;
        this.#B=B;
        this.C=C;

    }
    getter(){
        return this.#B;
    }
}

let a1= new A(10,20,30)
console.log(a1.getter())


/*
INTERVIEW - LET VAR CONST -
HOSITING -1
SCOPES-
CLOSURES -1

ASYNC JS  (CALLBACKS , PROMISES , ASYNC AWAIT)-2

~ 5 class js 


dom
project -vanilla -4 class with project
[calc,(8-10 form validation , progress bar, image switch , traffic red light , music player , ecommerce,todo list)]

react  - 20 class  [ end to end eccomerce - 2-3 yrs ]

backend - 25 class 








*/

