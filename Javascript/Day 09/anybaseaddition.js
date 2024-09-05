

function anybaseaddition(base ,num1 ,num2){
    let ans =0;
    let c=0;
    let pow=1;
    while(num1>0 || num2> 0 || c>0){
        let num1ld=num1%10;
        let num2ld=num2%10;
        num1=Math.floor(num1/10);
        num2=Math.floor(num2/10);
            let d=num1ld+num2ld+c;
            c=Math.floor(d/base);
            d=d%base;
            ans+=d*pow;
            pow=pow*10;
    }
    return ans;
}
let sum=anybaseaddition(8,67,43)
console.log(sum);



/*

l20 right 
base =8
num1=67
num2=43
l4 ans=0
l5 c=0
l6 pow=1
l7 num1>0 || num2>0 ||c>0
67>0 true
l8 num1ld=num1%10=67%10=7
l9 num2ld=num2%10=43%10=3
l10 num1=num1/10 67/10=6.7 6
l11 num2=num2/10 43/10 4.3 4
l12 d=7+3+0=10
l13 c=d/base 10/8 1
l14 d=d%base 10%8=2
l15 ans+=d*pow 2*1=0+2=2
l16 pow=1*10=10
l7 num1>0 6>0 true
l8 num1ld=6%10=6
l9 num2ld=4510=4
l10 num1=0
num22=0
l12 d=6+4+0=10
\l13 c=10/8=1
l14 d=10%8 =2
l15 ans=2+20=22
l7 num1>0 0>0 
num2>0 0?>0 false 
c>0 1>0 true






*/