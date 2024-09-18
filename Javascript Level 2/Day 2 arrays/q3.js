

/*

arr=[1,2,3,4,3,5,3,2,7,8,0]
target = 5

pair {2,3}.{1,4},{2,3},{3,2}.{5,0}




*/

let arr=[1,2,3,4,3,5,3,2,7,8,0];
let target=5;
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]==target){
            console.log(arr[i],arr[j]);
            
        }
    }
}






