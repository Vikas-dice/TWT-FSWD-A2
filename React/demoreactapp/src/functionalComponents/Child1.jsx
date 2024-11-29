import React from 'react'

export default function Child1({sendData}) {
    // console.log("coming props from parent",props)
    const datatransfer=()=>{
        sendData(27)
    }

  return (
    <div>Child1
        <button onClick={datatransfer}>click me to send data to parent1</button>
    </div>
  )
}
