

/*

arr=[3,5,2,7,1,4]
arr sort 





*/

let arr=[3,5,2,7,1,4,9,13,10]

// for(let i=0;i<arr.length;i++){
//     if(arr[i]>arr[i+1]){
//         let temp=arr[i]
//         arr[i]=arr[i+1]
//         arr[i+1]=temp;

//     }
// }

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            let temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp;
        }
    }
}


console.log("sorted array is ",arr);


//hello world 

