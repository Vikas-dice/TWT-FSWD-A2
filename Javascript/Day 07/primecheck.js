

/*

number 

12 
12%1==0
122%2==0 
12///\


12%12==0



*/


let num=13;


let nof=0;
for(let div=2;div*div<=num;div++){
    if(num%div==0){
        nof=nof+1;
        break;
    }
}
if(nof==0){
    console.log(" prime");
    
}else{
    console.log(" not prime ")
}

/*
l20 num=ram=7
l23 nof=ram=0
l24 div=ram=1
div<=num 1<=7 true
l25 num%div==0 12%1==0
l26 nof=nof+1 0+1=1
div++ div=1+1=2
div<=num 2<=12 true
l25 num%div==0 12%2==0
l26 nof 1+1=2
div++ div=3
l25 num%div==0 12%3==0 true
l26 nof=nof+1 2+1=3
div++ div=4
num%div==0 12%4==0 true
l26 nof 3+1=4
div++ div=5
12%5==0 false
div++
div=6
132^6==0 true
nof=6



*/