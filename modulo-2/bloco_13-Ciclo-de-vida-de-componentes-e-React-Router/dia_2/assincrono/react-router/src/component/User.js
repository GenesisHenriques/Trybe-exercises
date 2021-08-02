import React, { Component } from 'react';

export default class User extends Component {
  render() {
    const { greetingsMessage } = this.props;
    return (
      <div>
        <h2 className="User">Users</h2>
        <p>{ greetingsMessage }, My awesome Users component</p>
      </div>
    )
  }
}