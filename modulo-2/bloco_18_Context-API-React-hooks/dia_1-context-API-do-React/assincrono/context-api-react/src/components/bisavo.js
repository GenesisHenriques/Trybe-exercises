import React, { Component } from 'react';
import Avo from './avo';
import MyContext from './myContext';

export default class Bisavo extends Component {
  constructor() {
    super();

    this.state = {
      money: 100000,
    }
    this.handleSpendMoney = this.handleSpendMoney.bind(this);
  }
  handleSpendMoney(){
    this.setState((prevState) => ({money:prevState.money - 100}))
  }
  render() {
    const contextValue = {
      money: this.state.money,
      spendMoney: this.handleSpendMoney,
    }
    return (
    <MyContext.Provider value={contextValue}>
        <>
          <p>Bisavo</p>
          <Avo />
        </>
    </MyContext.Provider>
    );
  }
}
