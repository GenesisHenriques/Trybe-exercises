import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <h1>About</h1>
        <Link to="/">Voltar</Link>
      </div>
    )
  }
}