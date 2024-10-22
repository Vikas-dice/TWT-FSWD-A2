


class A{
    name;
    age;
    salary;

    fun=()=>{
        return 10;
    }

    constructor(name,age,salary){
        this.name = name ; 
        this. age = age ; 
        this . salary= salary;
    }
}

let objA = new A("ROHAN",28,5000)
console.log(objA.age)
// console.log(super.fun())
