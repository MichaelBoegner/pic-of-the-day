import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import Register from './components/Register';
import './App.css';



class App extends Component {
  constructor(){
    super();
    this.state={

    }
  }


onRegisterHandler = e => {
  e.preventDefault(); 
  this.props.history.push('/code');
}



  render() {
    console.log('state', this.state)
    return (
      <div className="App">  
        <div>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/logout">Logout</NavLink>
          <NavLink to="/users">Users</NavLink>
        </div>

      <div> 
      <Route
            path="/register"
            render={props => (
              <Register
                {...props}
                onRegisterHandler={this.onRegisterHandler}
              />
            )}
          />

      <Route 
            path='/code' 
            component={() => window.location = 'https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=code'}/>    
      </div>
    </div>
    );
  }
}

export default withRouter(App);