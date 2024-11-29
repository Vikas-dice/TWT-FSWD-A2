import React from 'react'

export default function Child(props) {
  console.log("hello world")
    console.log("-------------",props.greeting)

  return (
    <div>Child
        <h1>{props.greeting}</h1>
        <h1>{props.umar}</h1>

     
    {props.marks.map((maal, index) => (
        <h3>{maal}</h3>
    ))}


       
    </div>
  )
}
