import secrets from '../../secrets';
import { GITHUB_API, PULL_REQUEST_EVENT, FORK_EVENT } from '../../constants';

export const logout = () => ({
  type: 'LOGOUT'
});

const saveForks = forks => ({
  type: 'FETCH_FORKS',
  payload: forks,
})

const savePullRequests = prs => ({
  type: 'FETCH_PULL_REQUESTS',
  payload: prs,
})

const getGithubUserEvents = username => fetch(`${GITHUB_API}/${username}/events?access_token=${secrets.GITHUB_TOKEN}`);

const transformPrs = pr => ({ 
  id: pr.id,
  name: pr.title,
  url: pr.url,
  status: pr.state
});

const transformForks = fork => ({ 
  id: fork.id,
  name: fork.repo.name,
  url: fork.repo.url
});

export const fetchEvents = username => dispatch => {
  getGithubUserEvents(username)
    .then(res => res.json())
    .then(events => {
      const forks = events
        .filter( event => event.type === FORK_EVENT)
        .map(transformForks);
      
      dispatch(saveForks(forks));
      return events;
    })
    .then(events => {
      const pullRequestUrls = events
        .filter( event => event.type === PULL_REQUEST_EVENT)
        .map( pr => pr.payload.pull_request.url );
    
      const getPullRequests = pullRequestUrls.map( pullRequestUrl =>
        fetch(pullRequestUrl)
          .then(res => res.json()));

      Promise.all(getPullRequests)
        .then(prs => prs.map(transformPrs))
        .then(prs => dispatch(savePullRequests(prs)));
    })
    .catch(err => console.log(err));
}