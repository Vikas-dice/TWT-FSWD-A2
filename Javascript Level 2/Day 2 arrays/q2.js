

/*

arr[10,20,30,40,50,60]
target =30





*/

let arr=[10,20,15,30,40,50,45,60,80]
let target=500;
function searchtarget(arr,target){
    for(let maal of arr){
        if(maal==target){
            return true
        }
    }
    
        return -1;
    

}

let rv=searchtarget(arr,target)
console.log(rv);


