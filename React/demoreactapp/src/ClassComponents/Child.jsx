import React, { Component } from 'react'

export default class Child extends Component {
  render() {

    let dt=100;
    return (
      <div>Child

        <Child dt={dt}/>
      </div>
    )
  }
}
