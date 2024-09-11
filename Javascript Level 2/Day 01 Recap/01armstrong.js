

// function nod(num){
//     let count=0;
//     while(num>0){
//         num=Math.floor(num/10);
//         count++;
//     }
//     return count;
 
// }


// function check(num){
//     let temp=num;
//     let n=nod(num);
//     let sum=0;
//     while(temp>0){
//         let ld=temp%10;
//         sum=sum+Math.pow(ld,n);
//         temp=Math.floor(temp/10)   
//     }
//     if(sum==num){
//         return true;
//     }else{
//         return false;
//     }
// }
// let ans=check(153);
// console.log(ans);




/*
0 1 1 2 3 5 8 13 21 

func (20)


prev=0
next=1
nnn=prev+next







*/
function fibo(num){
let i=1;
let prev=0;
let next=1;
while(i<=num){
  let nn=prev+next;
   prev=next;
   next=nn;
   console.log(prev);
    i++;
}

}

fibo(20);
