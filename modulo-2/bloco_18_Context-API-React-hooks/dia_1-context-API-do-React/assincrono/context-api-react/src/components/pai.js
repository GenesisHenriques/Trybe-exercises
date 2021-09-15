import React, { Component } from 'react';
import Filho from './filho';

export default class Pai extends Component {
  render() {
    return (
      <>
        <p>Pai</p>
        <Filho />
      </>
    );
  }
}