import React from "react";
import { connect } from "react-redux";
import Login from "./Login/Login.js";
import Profile from "./Profile/Profile.js";

const App = ({ loggedIn }) => (
  <div className="App">
    <h1>Github Developer</h1>
    { loggedIn ? <Profile /> : <Login /> }
  </div>
);

const mapStateToProps = state => ({
  loggedIn: state.loggedIn
});

export default connect(mapStateToProps)(App);
