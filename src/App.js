import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "./Login.js";
import Profile from "./Profile.js";
import { changeUsername, login, logout, fetchFollowers } from "./actions";

class App extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.loggedIn !== this.props.loggedIn) {
      if (this.props.loggedIn) {
        this.props.fetchFollowers(this.props.profile.followers_url);
      }
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Github Developer</h1>
        {this.props.loggedIn ? (
          <Profile
            {...this.props.profile}
            followers={this.props.followers}
            handleLogOut={this.props.logout}
          />
        ) : (
          <Login
            handleChangeUsername={this.props.changeUsername}
            handleLogin={() => this.props.login(this.props.username)}
            username={this.props.username}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  changeUsername,
  login,
  logout,
  fetchFollowers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
