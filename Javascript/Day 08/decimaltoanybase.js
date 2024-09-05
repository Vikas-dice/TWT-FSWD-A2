

function decimaltoanybase(num,base){
    let ans =0;
    let pow=1; //10 ki power 0m 
    while(num>0){
        let rem=num%base;
        num=Math.floor(num/base);
        rem=rem*pow;
        ans=ans+rem;
        pow=pow*10;
    }
    return ans;
}
let rv=decimaltoanybase(100,2)
console.log(rv);





/*
l15 right side
num=100
base =2
l4 ans =0
l5 pow =1
l6 num>0 100>0 true
l7 rem= num%base 100%2 0
num=100/2 50
l9 rem= 0*1=0
l10 ans = 0+0=0
l6 num>0 50>0 true
l7 rem=50%2=0
l8 num=50/2=25
l9 rem=0*10=0
l10 ans=0+0=0
l11 pow =10*10=100
l6 num>0 25>0 true
l7 rem=25%2=1
l8 num=25/2 =12
l9 rem=1*100=100
l10 ans=0+100=100
l11 pow=100*10=1000
l6 num>0 12>0 true
l7 rem=12%2=0
l8 num=12/2=6
l9 rem=0*1000=0
l10 ans=100+0=100
l11 pow =1000*10=10000
;l6 num>0 6>0 true
l7 rem=6%2=0
l8 num=6/2=3
l9 rem=0*10000=0
l10 ans=100+0=100
l11 pow =10000*10=100000
l6 num>0 3>0 true








*/