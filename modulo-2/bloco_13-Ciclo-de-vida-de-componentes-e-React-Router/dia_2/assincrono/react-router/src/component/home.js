import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>Home</h1>
        <Link to="/About">Ir para About</Link>
      </div>
    )
  }
}