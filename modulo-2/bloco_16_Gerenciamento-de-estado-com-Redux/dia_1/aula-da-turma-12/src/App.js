import './App.css';
import React,{ Component } from 'react';
import { changeTheTheme, increaseNumber, decreaseNumber } from './store';

class App extends Component {
  handleClick = () => {
    const theme = this.props.getState().reducer.theme;

    theme === 'dark' ?
    this.props.dispatch(changeTheTheme('ligth')) :
    this.props.dispatch(changeTheTheme('dark'))
  }

 handleIncrease = () => {
   this.props.dispatch(increaseNumber());
 }
 handleDecrease = () => {
  this.props.dispatch(decreaseNumber());
}

  render() {
    return(
      <>
        <div>
          { console.log(this.props.getState()) }
          <p>{ this.props.getState().reducer.theme }</p>
          <button type="button" onClick={ this.handleClick }>Trocar</button>
        </div>
        <br />
        <div>
          <p>{ this.props.getState().reducerCounter.num }</p>
          <button type="button" onClick={ this.handleDecrease }>Diminuir</button>
          <button type="button" onClick={ this.handleIncrease }>Aumentar</button>
        </div>
      </>
    );
  }
}

export default App;
