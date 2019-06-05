import React, { Component } from 'react'
import User from './User'

export class Users extends Component {
  render() {
    return (
      <div>
        <User age="20">John</User>
        <User age="30">Jill</User>
        <User age="40">Peter</User>
      </div>
    )
  }
}

export default Users
