

/*
base 8 - base  2
 step1 - base 8 - base 10 (anybase to decimal )
 step 2 - base 10 - base 2 (decimal to anybase)


 final -> base 8 - base 2 




*/

//step 1 - anybase to decimal
function anybasetodecimal(num,base){
    let ans=0;
    let pow=1;
    while(num>0){
        let rem=num%10;
        num=Math.floor(num/10)
        rem=rem*pow;
        ans=ans+rem;
        pow=pow*base;
    }
    return ans;
}

//step 2 - decimal to anybase 
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

//step 3 - anybase to anybase 

function anybasetoanybase(num1, base1 , base2){

    //step 1 - anybase to decimla 

    let decimalnumber=anybasetodecimal(num1,base1);
        let finalconvertednumber=decimaltoanybase(decimalnumber,base2)
   
        console.log(finalconvertednumber);
        
}

anybasetoanybase(67,8,5)
