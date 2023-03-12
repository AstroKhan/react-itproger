import React, { Component } from 'react'
import '../css/main.css'
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'

export class User extends Component {
    user = this.props.user
  render() {
    return (
    <div className='user'>
        <IoCloseCircleSharp className='delete-icon'/>
        <IoHammerSharp className='edit-icon' />
        <h3>{this.user.firstname} {this.user.lastname}</h3>
        <p>{this.user.bio}</p>
        <b>{this.user.isHappy ? 'Счаслив' : 'Не очень'}</b>
    </div>
    )
  }
}

export default User