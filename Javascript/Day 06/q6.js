/*

45678, k =2,k=3,k=-2,k=-1



78456

67845
67845

56784





*/

let num=45123;
let k =-3
//output 23451
let temp=num;
let nod=0;
while(temp>0){
   temp= Math.floor(temp/10);
    nod++; 
}
if(k<0){
    k=k+nod;
}
// console.log(nod);
let mult=1;
let div=1;


for(let i=1;i<=nod;i++){
    if(i<=k){
        div=div*10;
    }else{
        mult=mult*10;
    }
}

console.log("mult",mult);
console.log("div",div);
let ans =1;
    let rem=num%div;
    let qt=Math.floor(num/div);
    ans=rem*mult+qt;
console.log(ans);