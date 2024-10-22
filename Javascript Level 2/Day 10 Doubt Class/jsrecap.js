

class A{

    name;
    age;
    salary;

    constructor(name,age,salary){
        console.log("dekho m chal gya ")
        this.name=name;
        this.age=age;
        this.salary=salary;
        console.log("age ---",super.age)

    }
}

class B extends A{
    
    constructor(name,age,salary){
        super(name,age,salary);
        console.log("DEKHO M B CLASS K ANDRR CHALA HU")
        console.log(super.age)
    }
    // c=super.age;
    
}

// let obj1=new A("ROHAN",28,10000);


// console.log(obj1)
// let obj1fromb=new B("rohan",28,10000);
// // console.log(super.age)
// let objfromA=new A("VIKAS",28,5000)



// let objfromB= new B ("VIKAS",28,5000)
// console.log(objfromB)


//super - A CLASS K OBJECT K TARH KAAM KRNBA


// let objfromA= new A("VIKAS",28,5000)
// console.log(super.age) //SUPER.AGE

// let objB= new B("VIKAS",28,5000)
// console.log(objB.c)
