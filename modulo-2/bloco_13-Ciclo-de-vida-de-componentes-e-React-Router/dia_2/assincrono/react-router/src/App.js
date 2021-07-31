import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Route } from 'react-router-dom';

import About from './component/About';
import HawTo from './component/HawTo';
import Profile from './component/Profile';
import Home from './component/home';

function App() {
  return (
    <BrowserRouter>
      <h1>Header</h1>
      <Route path="/About" component={About} />
      <Route path="/Hawto" component={HawTo} />
      <Route path="/Profile"><Profile /></Route>
      <Route exact path="/" component={Home}/>
    </BrowserRouter>
  );
}

export default App;
