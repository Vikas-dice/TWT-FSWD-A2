


class Human{


    constructor(name,age,salary,task){
        this.name=name;
        this.age=age;
        this.salary=salary;
        this.task=task;
    }
}


class Animal extends Human{
    constructor(name,age,salary,task){
        super();
        this.name=name;
        this.age=age;
        this.salary=salary;
        this.task=task;

    }

}

let animal1= new Animal("dog",6,1000,function(){
    console.log("safe guarding ")
})

console.log(animal1)


