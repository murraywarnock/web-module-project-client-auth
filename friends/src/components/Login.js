import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  state = {
    credentials: {
      username: 'Lambda',
      password: 'School'
    //   username: '',
    //   password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    console.log("login")

    //do an axios call to the login route http://localhost:5000/api/login
    //pass in credientials
    //if successful, console.log token
    //if error, console.log err
    axios.post('http://localhost:5000/api/login', this.state.credentials)
      .then(res => {console.log("login response: ", res);
        
        localStorage.setItem("token", res.data.payload);
        // this.setState({
        //   isAuth: true,
        //   username: res.data.username,
        //   role: res.data.role
        // })
       this.props.history.push('/friends');
      })
      .catch(err => {
        console.log(err);
      })

  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;