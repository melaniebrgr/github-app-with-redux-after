import secrets from '../../secrets';

export const changeUsername = e => ({
  type: "CHANGE_USERNAME",
  payload: e.target.value,
});

const handleLogin = profile => ({
  type: 'LOGIN',
  payload: profile
})

const getGithubUser = username => fetch(`https://api.github.com/users/${username}?access_token=${secrets.GITHUB_TOKEN}`);

export const login = username => dispatch => {
  getGithubUser(username)
    .then(res => res.json())
    .then(profile => dispatch(handleLogin(profile)))
}