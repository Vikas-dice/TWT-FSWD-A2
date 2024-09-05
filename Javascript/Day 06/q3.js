/*


5789
5
7
8
9

5789/1000 5.789 floor 5 print
789/100 7.89 floor 7 print
89/10 8.9 floor 8 print
9/1 9 print


786/100 

div= 10 ki power nod-1





*/


let num=12345;
let temp=num;
let nod=0;
while(temp>0){
    temp=Math.floor(temp/10);
    nod++;
}
console.log("final number ",num);
console.log("temp number ",temp);
console.log(nod);
let div=Math.pow(10,nod-1);
console.log(div);
while(num>0){
    let fd=Math.floor(num/div);
    console.log(fd);
    num=num%div;
    div=div/10;
}



// let num2 =786
// let nod2=0;
// for(let num2=786;num2>0;num2=Math.floor(num2/10)){
//     nod2++;
// }
// console.log("------------------------------");

// console.log(nod2);

