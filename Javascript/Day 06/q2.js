/*


786 
nod =3

*/

let num=786;
let nod=0;
while(num>0){
    num=Math.floor(num/10);
    nod=nod+1;
}
console.log("nod are",nod);

/*

l9 num=ram=786
l10 nod=ram=0;
l11 num>0 786>0 true
l12 num=num/10 786/10 78.6 floor 78
l13 nod=0+1=1
l11 num>0 78>0 true
l12 num=num/10 78/10 7.8 7
l13 nod=nod+1 1+1=2
l11 num>0 7>0 true
l12 num=num/10 7/10 0.7 0
l13 nod=2+1=3
l11 num>0 0>0 false

l15 niod are 3


78.6

78.600

12.24
12.240


pow = pow*10;



*/



