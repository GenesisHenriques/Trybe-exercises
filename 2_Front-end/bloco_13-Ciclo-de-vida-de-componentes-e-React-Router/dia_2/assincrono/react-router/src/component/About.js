import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class About extends Component {
  render() {
    
    const { title } = this.props
    const { name } = this.props.match.params;
    return (
      <div className="about">
        <h1>{ title }</h1>
        <p>Nome recebido por props do Route: { name } </p>
        <Link to="/">Voltar</Link>
      </div>
    )
  }
}