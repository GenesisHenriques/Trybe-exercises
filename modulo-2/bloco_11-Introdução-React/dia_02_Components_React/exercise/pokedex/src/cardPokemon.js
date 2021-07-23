import React from 'react';
import './App.css';
import Header from './header';
import Body from './body';

class cardPokemon extends React.Component {
    render() {
        return <div className = 'header'>
            <Header/>
            <hr />
            <div className = 'body'><Body /></div>
        </div>
    }
}

export default cardPokemon;