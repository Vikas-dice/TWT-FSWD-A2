

// /*
// nested loops


// */

// // for(let i=1;i<=5;i++){
// //     for(let j=1;false;j++){
// //         console.log(i,j);      
// //     }
// //     console.log("vikas");
    
    
// // }
// /*
// l9 i=ram=1 
// i<=5 1<=5 true
// l10 j=ram=1
// j<=3 1<=3 true
// l11 1 1
// j++ j=2
// j<=3 2<=3 true
// l11 1 2
// j++ j=3
// j<=3 3<=3 true
// l11 1 3
// j++ j=4
// j<=3 4<=3 false

// i++ i=2 
// i<=3 2<=3 true





// */


// let i=1;
// while(false){
//     for(let j=1;j<=4;j++){
//         console.log(i,j);
        
//     }
//     console.log("vikas");
    


//     i++;
// }
// console.log("dice");



/*

break - sabse paas wale loop se bhaar fenkega 

continue - wo wali iteration skip krdega 



*/


// for(let i=4;i<=10;i++){
//     console.log("vikas",i);
//     for(let j=1;j<=5;j++){
//         if(j==2){
//             break;
//         }
//         console.log("chaudhary",j);
        

//     }
    
// }


/*
l69 i=ram=4
i<=10 4<1=0 true
l70 vikas
l71 j=ram=1
j<=5 
1<=5 true
l72 j==2 1==2 false
l75 
j++ j=2
j<=5 2<=5 true
l72 j==2 2==2 true
l73 break;
l77 
i++ i=5


*/


// for(let i=2;i<=5;i++){
//     console.log("vikas",i);
//     for(let j=1;j<=5;j++){
//         console.log("chaudhary",j);
//         break;
        
//     }
    
// }

// for(let i=1;i<=5;i++){
//     for(let j=1;j<=5;j++){
//         for(let k=1;k<=5;k++){
//             console.log(i,j,k);
//             break;
            

//         }

//     }
// }


/*

continue - 


*/

// for(let i=1;i<=10;i++){
//     if(i==4){
//         continue;
//     }
//     console.log("vikas",i);
    
// }



for (let i = 1; i <= 10; i++) {
    if (i === 4) {
        continue; 
    }
    if (i === 8) {
        break; 
    console.log(i);
}
}

console.log("----question number 1---");


let i = 0;
let result = 1;
while (i < 5) {
    i++;
    if (i === 3) {
        continue;
    }
    result =result+i;
}
console.log(result);
/*
l155 i=ram=0
l156 result =ram =1
157 i<5 0<5 true
158 i++ i=1
159 i==3 1==3 false
162 result =1+1=2
157 i<5 1<5 true
158 i++ i=2
159 i==3 false
162 result=2+2=4
157 i<5 2<5 true
158 i++ i=3
159 i==3 3==3 true
160 continue i<5 3<5 true
158 i++ i=4
159
162 result =4+4=8
157 i<5 4<5 true
158 i++ i=5
162 result =8+5=13
157 i<5 5<5 false
loop k bahar = 164
13




*/


for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; 
    }
    if (i > 7) {
        break; 
    }
    console.log(i);
}


for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (j === 2) {
            break; 
        }
        console.log(i,j);
    }
}
