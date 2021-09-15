import './App.css';
import { Route, Switch } from 'react-router';
import AddMovie from './pages/addMovie';
import Movies from './pages/movies';
import Provider from './Context/MyContextProvider';
import React from 'react';

class App extends React.Component {
  

  render() {

    return (
      <Provider>
        <Switch>
          <Route exact path="/" component={ AddMovie } />
          <Route exact path="/filmes" component={ Movies } />
        </Switch>
      </Provider>
    );
  }
}

export default App;
