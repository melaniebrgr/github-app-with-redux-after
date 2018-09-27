import React from "react";
import FollowingList from "./FollowingList.js";
import Button from "./Button.js";

export default ({ login, avatar_url, handleLogOut, followers }) => (
  <div className="profile">
    <h2>Hello {login}</h2>
    <img src={avatar_url} alt={`${login}'s avatar'`} />
    <Button value="Log Out" handleClick={handleLogOut} />
    <FollowingList followers={followers} />
  </div>
);
