import React from "react";
import AddUser from "./components/AddUser";
import Header from "./components/Header";
import Users from "./components/Users";
import './css/main.css';

  
  class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [
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
        }
        this.addUser = this.addUser.bind(this)
    }
     
    render() {
    return ( <div>
    <Header title='Хедер' />
    <main><Users users={this.state.users} /></main>
    <aside><AddUser onAdd={this.addUser} /></aside>
  </div>)
  }
    addUser(user) {
        const id = this.state.users.length + 1
        this.setState({ users: [...this.state.users, {id, ...user}] })
    }
  }

  export default App;