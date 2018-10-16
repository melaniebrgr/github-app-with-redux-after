import React, { Component } from "react";
import { connect } from "react-redux";

import { logout, fetchEvents } from "./Profile.actions";
import Button from "../Button.js";

class Login extends Component {
  componentDidMount() {
    this.props.fetchEvents(this.props.username)
  }

  render() {
    const { username, avatarUrl, logout, followers } = this.props
    return (
      <div className="profile">
        <h2>Hello {username}</h2>
        <img src={avatarUrl} alt={`${username}'s avatar'`} />
        <Button value="Log Out" handleClick={logout} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  username: state.username,
  followers: state.followers,
  avatarUrl: state.profile.avatar_url,
  followersUrl: state.profile.followers_url
});

const mapDispatchToProps = {
  logout,
  fetchEvents
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

