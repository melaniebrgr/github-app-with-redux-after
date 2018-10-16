import secrets from '../../secrets';
import { GITHUB_API } from '../../constants';

export const changeUsername = e => ({
  type: "CHANGE_USERNAME",
  payload: e.target.value,
});

const handleLogin = profile => ({
  type: 'LOGIN',
  payload: profile
})

const getGithubUser = username => fetch(`${GITHUB_API}/${username}?access_token=${secrets.GITHUB_TOKEN}`);

export const login = username => dispatch => {
  getGithubUser(username)
    .then(res => res.json())
    .then(profile => dispatch(handleLogin(profile)))
}