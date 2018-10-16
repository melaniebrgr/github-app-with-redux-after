import React from "react";
import TextField from "./TextField.js";
import Button from "./Button.js";

export default ({ handleChangeUsername, handleLogin, username }) => (
  <div className="login">
    <h2>please enter your github username to login</h2>
    <TextField
      name="username"
      handleChange={handleChangeUsername}
      id="github-username"
      label="Username"
      value={username}
    />
    <Button value="Login" handleClick={handleLogin} />
  </div>
);
