

class Human {
    // hands;
    // legs;
    // occupation;
    // salary;
    // task;


    constructor(hands,legs,occupation,salary,task){
        console.log("m sabse phle chala ")
        this.haath=hands;
        this.paer=legs;
        this.kaam=occupation;
        this.tankhuwa=salary;
        this.task=task;
        this.ismarried=false;
        this.vikas="vikas"
        


    }
}

let human1=new Human("2","2","engineer",10000,function(){
    console.log("i am an engineer")
});
// let human2=new Human();
// console.log(human1)
// console.log(human2)


console.log(human1)

let human2= new Human(2,2,"medico",20000,function(){})
console.log(human2)


console.log(human1==human2);


//oops - encals , poly , abs , inheritance 

//js - encaps and inheritance 

//encaps - wrapping up of data into a asingle unit - class 
//inheritance 
