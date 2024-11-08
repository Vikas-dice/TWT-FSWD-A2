

console.log("hi")
const inputfield=document.querySelector("input")


inputfield.addEventListener("input",function(event){
    console.log("fired")
    console.log(event.target.value.length)
})