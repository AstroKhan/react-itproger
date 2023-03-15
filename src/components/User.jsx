import React, { Component } from 'react'
import '../css/main.css'
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'
import AddUser from './AddUser'

export class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editForm: false
        }
    }
    user = this.props.user
  render() {
    return (
    <div className='user'>
        <IoCloseCircleSharp onClick={() => this.props.onDelete(this.user.id)} className='delete-icon'/>
        <IoHammerSharp onClick={() => {
            this.setState({
                editForm: !this.state.editForm
            })
        }} className='edit-icon' />
        <h3>{this.user.firstname} {this.user.lastname}</h3>
        <p>{this.user.bio}</p>
        <b>{this.user.isHappy ? 'Счаслив' : 'Не очень'}</b>
        {this.state.editForm && <AddUser user={this.user} onAdd={this.props.onEdit} />}
    </div>
    )
  }
}

export default User