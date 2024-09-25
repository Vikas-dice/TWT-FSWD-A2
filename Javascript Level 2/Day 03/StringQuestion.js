


/*

 my name is vikas 

 return longrst string = vikas 

 length - inbuilt method/function 





*/

// let str="hello world";
// console.log(str.__proto__);

function longestString(str){
    let ar=str.split(" ");
    var maxlen=0;
    var ans=""; 
    for(let idx=0;idx<ar.length;idx++){
        if(ar[idx].length>maxlen){
            maxlen=ar[idx].length;
            ans=ar[idx];
            
        }
    }
    return ans;
}


let rv=longestString("my name is vikas chaudhary")
// console.log(rv.length);
console.log(rv);



/*
l21 str="my name is vikas";
l22 ar=["my","name","is","vikas"]
l23 maxlen =0;
l24 ans =""
l25 idx=0
idx<4 true
l26 ar[0].length>0
2>0 true
maxlen=2
ans=ar[0]="my"
idx++ idx=1
idx<ar.lemgth 1<4 true
l26 ar[1].length>2
4>2 true
maxlen=ar[1].length ="name"=4
ans=ar[1]="name";
idx++ idx=2


*/


/*
str="my name is vikas is vikas name vikas ";
vikas freq q1
vikas first time - index (inbuilt )



*/

function freqcount(str,target){
    let ar =str.split(" ");

    let count=0;
    for(let maal of ar){
        if(maal==target){
            count++;
        }
    }


    return count;
}

let ans=freqcount("my name is vikas is vikas name vikas","vikas")
console.log(ans);


function firstIndex(str,tar){
    let arr=str.split(" ");
    let ansidx=-1;

    for(let idx=0;idx<arr.length;idx++){
        if(arr[idx]==tar){
            ansidx=idx;
            break;
        }

    }

    return ansidx;

   
}

let ans2 =firstIndex("my name is is dice vikas is vikas name vikas","vikas")

console.log(ans2);




/*

my name is vikas 

q1- vikas is name my 
q2- sakiv si eman ym 





*/


function reverse(str){
    let arrr=str.split(" ");

    let st=0;
    let end=arrr.length-1;

    while(st<end){
        let temp=arrr[st];
        arrr[st]=arrr[end];
        arrr[end]=temp;


        st++;
        end--;

    }
    console.log(arrr);
    
}

reverse("my name is vikas");




