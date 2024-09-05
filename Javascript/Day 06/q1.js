/*

4786 %10= 6 print
478 %10=8 print
47 %10=7
4%10=4

4786/10 =  floot478.6 478 
478/10 47.8 floor 47
47/10 4.7 floor 4
4/10 0.4 floor 0








6
8
7
4


num % 10= last digit/rem

786%10=6

786%100=86

786%1000=786




*/





let num=4786;
while(num>0){
    let ld = num%10;
    console.log(ld);
    num=Math.floor(num/10);
}
