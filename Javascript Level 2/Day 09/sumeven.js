


let arr=[1,2,3,4,5,6,7,8,9,10];
/*
step1 - even number - filter 

step 2 - reduce (acc,num),0 =sum


*/

let evennumber=arr.filter((maal)=>{
    return maal%2==0
}).reduce((acc,num)=>{
    // console.log(acc+num)
    return acc+num;
})

console.log(evennumber)

// console.log(evennumber)
// let ans =evennumber.reduce((acc,num)=>{
//     return acc+num;
// })

// console.log(ans)


/*
arr=["vikas","rohan","puneet","ankit","rampraksh","sohanpaal"]

array filter = length>5









*/

arr=["vikas","rohan","puneet","ankit","rampraksh","sohanpaal"]

let ans=arr.filter((maal)=>{
    return maal.length>5;
})

console.log(ans)


/*

const transactions = [
  { type: "income", value: 1000 },
  { type: "expense", value: 200 },
  { type: "income", value: 1200 },
  { type: "expense", value: 500 }
];
// Expected output: 2200

/*
Write a function that takes an array of orders, where each order has an id, quantity, and pricePerItem, and calculates the total cost of all orders.
javascript
Copy code
const orders = [
  { id: 1, quantity: 2, pricePerItem: 500 },
  { id: 2, quantity: 1, pricePerItem: 1500 },
  { id: 3, quantity: 4, pricePerItem: 300 }
];
// Expected output: 3700



q2 
\
iven an array of objects representing products, each with a name and price, write a function that returns an array of product names, but only for products that cost more than ₹500.
javascript
Copy code
const products = [
  { name: "Laptop", price: 75000 },
  { name: "Mobile", price: 15000 },
  { name: "Book", price: 500 },
  { name: "Headphones", price: 2000 }
];


*/




*/