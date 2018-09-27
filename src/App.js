import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "./Login.js";
import Profile from "./Profile.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: "",
      firstName: "",
      profile: {},
      followers: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleLogin() {
    this.getGithubUser(this.state.username)
      .then(res => res.json())
      .then(data => this.setState({ profile: data, loggedIn: true }))
      .catch(err => this.setState({ error: err }));
  }

  handleLogOut() {
    this.setState({ loggedIn: false, profile: {} });
  }

  getGithubUser(username) {
    return fetch(`https://api.github.com/users/${username}`);
  }

  getGithubFollowing(url) {
    return fetch(url);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.loggedIn !== this.state.loggedIn) {
      if (this.state.loggedIn) {
        this.getGithubFollowing(this.state.profile.followers_url)
          .then(res => res.json())
          .then(data => this.setState({ followers: data }));
      }
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Github Developer</h1>
        {this.state.loggedIn ? (
          <Profile
            {...this.state.profile}
            followers={this.state.followers}
            handleLogOut={this.handleLogOut}
          />
        ) : (
          <Login
            handleChange={this.handleChange}
            handleLogin={this.handleLogin}
            username={this.state.username}
            firstName={this.state.firstName}
          />
        )}
      </div>
    );
  }
}

export default connect()(App);
