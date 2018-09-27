import React from "react";

export default ({ followers }) => (
  <React.Fragment>
    <h2>My followers</h2>
    <ul>
      {followers.map((follower, i) => (
        <li key={`follower-${i}`}>
          <img src={follower.avatar_url} alt={`${follower.login}'s avatar`} />
          <p>{follower.login}</p>
        </li>
      ))}
    </ul>
  </React.Fragment>
);
