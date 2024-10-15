

class Human{

    constructor(name,age,occupation,salary){
        this.naam=name;
        this.age=age;
        this.occupation=occupation;
        this.salary=salary;
    }
}


let human1=new Human("rohan",27,function(){
    return "engineer"
},10000)


class Animal extends Human{
 
    
    constructor(name,age,occupation,salary){
        super();
        this.naam=name;
        this.age=age;
        this.occupation=occupation;
        this.salary=salary

    }



}

let animal1=new Animal("dog",10,function(){
    console.log("safe guarding")
},5000)


console.log(animal1)







// console.log(human1)

// for(const maal in human1){
//     console.log(maal)
// }

// console.log(human1.salary)


//access modifier
