import React from 'react'

export default function DemoChild(props) {
    console.log("----------",props)
    console.log("********",props.a);
    
    
  return (
    <div>DemoChild

        <h1>{props.a}</h1>
        
    </div>
  )
}
