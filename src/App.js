import React, { Component } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state ={
      users:[
        {id:1, name:"Gabriel", email:"test@miguel.io"},
        {id:2, name:"Ana", email:"otrotest@anatest.es"},
        {id:3, name:"Jesus", email:"test@test.org"}
      ]
    }
  }

  handleOnAddUser(event) {
    event.preventDefault();
    let user = {
      name: event.target.name.value,
      email: event.target.email.value
    };

    this.setState({
      users: this.state.users.concat([user])
    });

  }

  render() {
    return (
      <div className="container"> 
      <div class="col-md-4 mx-auto">
       <UserList  users={this.state.users} /> 
       <UserForm onAddUser={this.handleOnAddUser.bind(this)} />
       </div>
     </div> 
     
    );
  }
}

export default App;
