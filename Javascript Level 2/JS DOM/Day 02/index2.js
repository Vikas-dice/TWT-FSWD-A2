// console.log("test")



var image1=document.querySelector('#img1')
var image2=document.querySelector("#img2")
var btn=document.querySelector("button")



function swapimages(){

    let temp=image1.src ;
    image1.src=image2.src;
    image2.src=temp;
    



}