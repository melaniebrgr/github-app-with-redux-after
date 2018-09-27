export const handleChangeUsername = e => ({
  type: "CHANGE_USERNAME",
  payload: e.target.value,
});

export const handleChangeFirstName = e => ({
  type: "CHANGE_FIRST_NAME",
  payload: e.target.value,
});

const getGithubUser = username => fetch(`https://api.github.com/users/${username}`);

const handleLogin = profile => ({
  type: 'LOGIN',
  payload: profile
})

export const login = username => dispatch => {
  getGithubUser(username)
    .then(res => res.json())
    .then(profile => dispatch(handleLogin(profile)))
}

export const handleLogout = () => ({
  type: 'LOGOUT'
});

const saveFollowers = followers => ({
  type: 'FETCH_FOLLOWERS',
  payload: followers
});

const getGithubFollowing = url => fetch(url);

export const fetchFollowers = followersUrl => dispatch => {
  getGithubFollowing(followersUrl)
    .then(res => res.json())
    .then(followers => dispatch(saveFollowers(followers)));
}




