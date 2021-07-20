import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import axiosWithAuth from './utils/axiosWithAuth';


function App() {
  const logout = () => {
    console.log("logout");
    axiosWithAuth()
      .post("/api/logout")
      .then(res => {
        localStorage.removeItem("token");
        window.location.href = "/login";
      })
      .catch(err=>{
        console.log(err);
      })
  };

  return (
    <Router>
      <div className="App">
        <ul>
        {!localStorage.getItem("token") ? 
          <li>
            <Link to="/login">Login</Link>
          </li> : 
          <li>
            <Link onClick={logout}>Logout</Link>
          </li>}
        </ul>
        <Switch>
          <PrivateRoute exact path="/friends" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
