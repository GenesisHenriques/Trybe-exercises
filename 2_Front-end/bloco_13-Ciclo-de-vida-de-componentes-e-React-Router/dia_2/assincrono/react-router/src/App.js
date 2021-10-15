import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import About from './component/About';
import User from './component/User';
import Profile from './component/Profile';
import Home from './component/home';
import StrictAccess from './component/StrictAccess';

function App() {
  return (
    <BrowserRouter>
      <h1>Header</h1>
      <ul>
        <li><Link to="/Home">Ir para Home</Link><br /></li>
        <li><Link to="/About">Ir para About</Link><br /></li>
        <li><Link to="/User">Ir para Useer</Link><br /></li>
        <li><Link to="/strict-access">Strict Access</Link><br /></li>
      </ul>

      <Switch>
        <Route
          path="/About/:name"
          render={(props) => <About {...props} title="About" />}
        />
        <Route path="/User" component={User} />
        <Route path="/Profile"><Profile /></Route>
        <Route
          exact path="/strict-access"
          render={() => <StrictAccess user={ {username: 'genesis', password: 1234} }/>}
        />
        <Route exact path="/Home" component={Home}/>
        <Route exact path="/" component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
