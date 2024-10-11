

class Area{

    constructor(){

    }

    area(l,b){
        return l*b;
    }

    area(l,b,h){
        return l*b*h;
    }
}
// area(2,3,4)

/*
method overloading - function/method-signature - naam same - and params alag alag -

*/

let obj1= new Area();
console.log(obj1.area(2,3))

// console.log(obj1)
