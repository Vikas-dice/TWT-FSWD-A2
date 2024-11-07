
var redlight=document.querySelector('#red')
var yellowlight =document.querySelector("#yellow")
var greenlight=document.querySelector("#green")

var btn1 =document.querySelector("#btn1")
var btn2 =document.querySelector("#btn2")
var btn3 =document.querySelector("#btn3")


function changetored(){
    redlight.style.backgroundColor='#555';
    yellowlight.style.backgroundColor='#555';
    greenlight.style.backgroundColor='#555';
    redlight.style.backgroundColor='red';

}

function changetoyellow(){
    redlight.style.backgroundColor='#555';
    yellowlight.style.backgroundColor='#555';
    greenlight.style.backgroundColor='#555';
    yellowlight.style.backgroundColor='yellow';

}

function changetogreen(){
    redlight.style.backgroundColor='#555';
    yellowlight.style.backgroundColor='#555';
    greenlight.style.backgroundColor='#555';
    greenlight.style.backgroundColor='green';
    

}

function disco(){
    redlight.style.backgroundColor='red';
    yellowlight.style.backgroundColor='yellow';
    greenlight.style.backgroundColor='green';


}

// function finalfun(){
//     changetored()
//     changetoyellow()
//     changetogreen()
// }



function test(){

    setTimeout(() => {
        setInterval(() => {
            changetored()
            
        }, 2000);
        
        setInterval(() => {
            changetogreen()
            
        }, 2000);
        setInterval(() => {
            changetoyellow()
            
        }, 2000);
        
    }, 5000);
}


