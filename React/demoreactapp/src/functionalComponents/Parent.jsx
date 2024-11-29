import React from 'react'
import Child from './Child'

export default function Parent() {
  console.log("hey world !");
  
    let greeting="hello world";
    let age=27;
    let marks=[10,20,30]
  return (
    <div>Parent

        <Child greeting={greeting} umar={age} marks={marks}/>
    </div>
  )
}
