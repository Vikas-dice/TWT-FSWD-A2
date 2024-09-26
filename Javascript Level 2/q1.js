/*

string = my name is vikas 

output - sakiv si eman ym 




*/


// function reversestringadvance(str){
//     let arr= str.split("");

//     console.log(arr);

//     for(let i=0;i<arr.length;i++){

//         // // console.log(arr[i]);
//         // for(let j=0;j<arr[i].length;j++){
//         //     for(let k=j+1;k<arr[i].length;k++){
//         //         let temp=arr[i][0];
//         //         let
//         //     }
            


            
//         }
        


//     }
    




// reversestringadvance("my name is vikas")


// function reverseword(str){
//     let arr=str.split(" ");

//     for(let i=0;i<arr.length;i++){

//         let st=0;
//         let end = arr[i].length-1;
//         while(st<end){
//             let temp=arr[i][st];
//             arr[i][st]=arr[i][end]
//             arr[i][end]=temp;


//             st++;
//             end--;
//         }




       

//     }

//     console.log(arr);
    

    
// }

// reverseword("my name is vikas")



function reverse(str){
    let arr =str.split(" ");
   for(let i=0;i<arr.length;i++){
    let word=arr[i];
    // console.log(word)
    for(let j=0;j<word.length;j++){
        let st=0;
        let end =word.length-1;
        var splittedword = word.split("");
        while(st<end){
            let temp=splittedword[st];
            splittedword[st]=splittedword[end]
            splittedword[end]=temp;


            st++;
            end--;

        }

        // console.log(splittedword.join(""));
        
        
        
        
        
    }
    
    console.log(splittedword.join(""));
    

 
   }
}

reverse("my name is vikas");
