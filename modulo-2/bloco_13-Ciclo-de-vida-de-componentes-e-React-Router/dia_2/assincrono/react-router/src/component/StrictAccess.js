import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class StrictAccess extends Component {
  render() {
    const { user } = this.props;
    const { username, password } = user;

    if(username === 'joao' && password === 1234) {
      return (
        <p>Welcome {username}!</p>
      );
    } else {
      alert("Access denied");
      return <Redirect to="/" />
    }
  }
}