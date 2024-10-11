
class Human{


    constructor(hands,legs,behaviour,task){
        this.hands=hands;
        this.legs=legs;
        this.behaviour=behaviour;
        this.task=task;
    }
}



let human1=new Human(2,2,"harami",function(){
    console.log("i am a human")
})

// class Animal{
//     constructor(hands,legs,behaviour,task){
//         this.hands=hands;
//         this.legs=legs;
//         this.behaviour=behaviour;
//         this.task=task;

//     }
// }


class Animal extends Human{
   

}


let animal1=new Animal(2,2,"loyal",function(){
    console.log("i am an animal")
})

console.log(animal1)


//types - multiple, multilelvel , hierarchical


