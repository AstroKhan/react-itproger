import React, { Component } from 'react'

export class Image extends Component {
  render() {
    return (
      <img src={this.props.image} alt='corndog' />
    )
  }
}

export default Image