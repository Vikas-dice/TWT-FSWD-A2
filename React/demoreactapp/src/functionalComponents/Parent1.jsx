import React from 'react'
import Child1 from './Child1'

export default function Parent1() {
    const recievedData=(maal)=>{
        console.log("coming data is ---",maal)
    }
  return (
    <div>Parent1

        <Child1 sendData={recievedData} greeting={"hello hi"}/>
    </div>
  )
}
