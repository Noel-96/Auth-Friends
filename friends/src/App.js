import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import PrivateRoute from "./components/PrivateRoute.js";
import Login from "./components/Login";
import LogOut from "./components/Logout"
import FriendList from "./components/FriendList";


function App() {
  return (
    <Router>
    <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <LogOut />
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
    <div className="app-background-container">

      <Switch>
        <PrivateRoute exact path="/protected" component={FriendList} />
        <Route path="/login" component={Login} />
        <Route exact path="/"/>
      </Switch>

    </div>
    </div>
    </Router>
  );
}

export default App;
