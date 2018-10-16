import secrets from './secrets';

export const changeUsername = e => ({
  type: "CHANGE_USERNAME",
  payload: e.target.value,
});

const getGithubUser = username => fetch(`https://api.github.com/users/${username}?access_token=${secrets.GITHUB_TOKEN}`);

const handleLogin = profile => ({
  type: 'LOGIN',
  payload: profile
})

export const login = username => dispatch => {
  getGithubUser(username)
    .then(res => res.json())
    .then(profile => dispatch(handleLogin(profile)))
}

export const logout = () => ({
  type: 'LOGOUT'
});

const saveFollowers = followers => ({
  type: 'FETCH_FOLLOWERS',
  payload: followers
});

export const fetchFollowers = followersUrl => dispatch => {
  fetch(followersUrl)
    .then(res => res.json())
    .then(followers => dispatch(saveFollowers(followers)));
}




