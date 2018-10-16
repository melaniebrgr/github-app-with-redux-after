import React from "react"
import { connect } from "react-redux";

import { login, changeUsername } from '../../actions'
import TextField from "../TextField.js";
import Button from "../Button.js";

const Login = ({ changeUsername, login, username }) => (
  <div className="login">
    <h2>please enter your github username to login</h2>
    <TextField
      name="username"
      handleChange={changeUsername}
      id="github-username"
      label="Username"
      value={username}
    />
    <Button value="Login" handleClick={() => login(username)} />
  </div>
);

const mapStateToProps = state => ({
  username: state.username,
});

const mapDispatchToProps = {
  changeUsername,
  login
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

