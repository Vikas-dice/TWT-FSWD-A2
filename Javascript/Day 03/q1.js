

/*
 q1 - 1-100 odd number 




*/


// for(let num=1;num<=100;num=num+1){
//     if(num%2!=0){
//         console.log("odd num" ,num);

//     }else{
//         console.log("even num" ,num);


//     }
   
    
// }


// for(let row=1;row<=5;row++){

//     for(let star=1;star<=row;star++){
//         // console.log("*");
//         process.stdout.write("*");
//     }
//     console.log();
    



// }

// for(let row=1;row<=5;row++){

//     //kuch starts chhapo
//     // for(let star=1;star<=5-row+1;star++){
//     //     process.stdout.write("*")
//     // }

//         for(let star=5;star>=row;star--){
//             process.stdout.write("*")

//         }

//     //new line 
//     console.log();
    

// }

// let nsp=4;
// let nst=1;


// for(let row=1;row<=5;row++){


//     //spaces
//     for(let sp=1;sp<=nsp;sp++){
//         process.stdout.write(" ")
//     }

//     //star
//     for(let st=1;st<=nst;st++){
//         process.stdout.write("*")
//     }


//     //new line 
//     console.log();
    

//     //update nsp nst
//     nsp=nsp-1;
//     nst=nst+1;
  
// }

// let nsp=0;
// let nst=5;
// for(let row=1;row<=5;row++){
//     //spaces
//     for(let sp=1;sp<=nsp;sp++){
//         process.stdout.write(" ")
//     }


//     //star
//     for(let st=1;st<=nst;st++){
//         process.stdout.write("*")

//     }

//     //new line
//     console.log();

//     //update nsp nst

//     nsp=nsp+1;
//     nst=nst-1;
    

// }


// let nsp=3;
// let nst=1;


// for(let row=1;row<=4;row++){

//     //spaces
//     for(let sp=1;sp<=nsp;sp++){
//         process.stdout.write(" ")
//     }

//     //stars
//     for(let st=1;st<=nst;st++){
//         process.stdout.write("*")

//     }

//     //new line\
//     console.log();
    
    

//     //update
//     nsp=nsp-1;
//     nst=nst+2;

// }


// let nsp=2;
// let nst=1;
// for(let row=1;row<=5;row++){

//     //spaces
//     for(let sp=1;sp<=nsp;sp++){
//         process.stdout.write(" ")
//     }

//     //stars
//     for(let st=1;st<=nst;st++){
//         process.stdout.write("*")

//     }

//     //nl
//     console.log();
    

//     //update
//     if(row<3){
//         nsp=nsp-1;
//         nst=nst+2;
//     }else{
//         nsp=nsp+1;
//         nst=nst-2;
//     }

// }
// let ans='';
// for(let row=1;row<=4;row++){
//     for(let star=1;star<=row;star++){
//         ans=ans+row;
        
//     }
//     console.log(ans);
    

// 



for(let row=1;row<=4;row++){
    let ans='';
    for(let star=1;star<=row;star++){
        ans=ans+row;
    }
    console.log(ans);
    
}



/*
l183 row=ram=1
row<=4 1<=4 true
184 ans=''
l185 star=ram=1
star<=row 1<=1 true
186 ans=ans+row ""+1= "1"
star++ star=2
star<=row 2<=1 false
l188 "1"
row++ row=2
row<=4 2<=4 true
l184 ans=""
l185 star=1 
star<=row 1<=2 true
l186 ans=ans+row " "+1 "1"
star++ star=2
star<=row 2<=2 true
l186 ans =ans+row "1"+2 "12"
star++ star=3 
l188 "12"





*/