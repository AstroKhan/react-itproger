import React, { Component } from 'react'

export class Users extends Component {
    users = [
        {
            id: 1,
            firstname: 'Bob',
            lastname: 'Marley',
            bio: 'Aute aliquip velit velit sit eiusmod excepteur. Laborum in ea do tempor consectetur Lorem proident Lorem nostrud eiusmod fugiat.',
            age: 40,
            isHappy: true
        },
        {
            id: 2,
            firstname: 'John',
            lastname: 'Doe',
            bio: 'Aute aliquip velit velit sit eiusmod excepteur. Laborum in ea do tempor consectetur Lorem proident Lorem nostrud eiusmod fugiat.',
            age: 22,
            isHappy: false
        },
    ]
  render() {
    if (this.users.length > 0)
    return (
      <div>
        {this.users.map((el) => (<div className='user' key={el.id}>
            <h3>{el.firstname} {el.lastname}</h3>
            <p>{el.bio}</p>
            <b>{el.isHappy ? 'Счаслив' : 'Не очень'}</b>
        </div>))}
      </div>
    )
    else 
    return (<div className='user'>
        <h3>Нет пользователей</h3>
    </div>)
  }
}

export default Users