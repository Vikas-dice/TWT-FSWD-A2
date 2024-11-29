import React, { Component } from 'react'

export default class Parent extends Component {
  render(props) {
    console.log("------------",this.props)
    console.log("*******",this.props.dt)

    return (
      <div>Parent

        <h1>{this.props.dt}</h1>
      </div>
    )
  }
}
