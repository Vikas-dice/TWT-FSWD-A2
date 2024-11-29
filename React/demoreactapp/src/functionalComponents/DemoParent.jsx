import React from 'react'
import DemoChild from './DemoChild';

export default function DemoParent() {
    let a=100;
  return (
    <div>DemoParent

        <DemoChild a={a}/>
    </div>
  )
}
