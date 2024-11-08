

const btn =document.querySelector("button")
console.log(btn)


function clickk(){
    btn.style.backgroundColor='red';

}


const btn2=document.querySelector("#btn2")

// console.log(btn2)

btn2.addEventListener("dblclick",function(){
    btn2.style.backgroundColor='red';

})

//custom tags elemts




const div =document.querySelector("div");
// const heading2=document.createElement("h2")
// heading2.innerText="heylo";


// // console.log(heading2)


// div.append(heading2)

// const para=document.createElement("p")
// // para.innerText="hello sir good morning";
// para.innerHTML=`<b>vikas</b>`

// div.appendChild(para)



// const btn3 =document.createElement("button");
// btn3.innerText="some button";


// div.prepend(btn3)



console.log("hello q")

const inputfield=document.querySelector("input")

inputfield.addEventListener("keydown",function(){
    console.log("fired")

})






