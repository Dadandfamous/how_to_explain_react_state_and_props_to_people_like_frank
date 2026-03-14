import React, { Component } from 'react'
import User from './User'

export class Users extends Component {

  state = {
    users: [
      {name:"John", age:20},
      {name:"Jill", age:30},
      {name:"Peter", age:40},
      {name:"Frank", age:40},
      {name:"Frenk", age:40},
    ],
    title:"Users List"
  }


  makeMeYounger = () => {
    const newUsers = this.state.users.map((user) => ({
      ...user,
      age: user.age >= 20 ? user.age - 10 : user.age,
    }));
    this.setState({ users: newUsers });
  }

  render() {
    return (
      <div>
        <button onClick={this.makeMeYounger}>Make Us 10 years younger</button>
        <br/>
        <h1>{this.state.title}</h1>
        {/*<User age={this.state.users[0].age}>{this.state.users[0].name}</User>
           <User age={this.state.users[1].age}>{this.state.users[1].name}</User>
           <User age={this.state.users[2].age}>{this.state.users[2].name}</User>*/}

        {
          this.state.users.map((user) => (
            <User key={user.name} age={user.age}>{user.name}</User>
          ))
        }
      </div>
    )
  }
}

export default Users
