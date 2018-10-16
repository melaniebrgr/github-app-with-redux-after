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