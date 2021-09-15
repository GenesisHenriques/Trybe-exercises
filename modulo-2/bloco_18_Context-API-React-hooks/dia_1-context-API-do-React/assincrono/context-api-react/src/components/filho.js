import React, { Component } from 'react';
import MyContext from './myContext';

export default class Filho extends Component {
  render() {
    return (
      <>
        <p>Filho</p>
        <MyContext.Consumer>
          {
            value => (
              <div>
                <p>{`Eu tenho ${value.money} pra gaster`}</p>
                <button onClick={value.spendMoney}>PEDIR UM IFOOD</button>
              </div>
            )
          }
        </MyContext.Consumer>
      </>
    );
  }
}