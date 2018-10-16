import React from "react"
import { connect } from "react-redux";

const PullRequests = ({ pullRequests }) => (
  <React.Fragment>
    <h3>Pull Requests</h3>
    <div>
      { pullRequests.map(pr => (
        <div key={ pr.id }>
          <h5><a href={pr.url}>{ pr.name }</a></h5>
          <p>Status: { pr.status }</p>
        </div>
      )) }
    </div>
  </React.Fragment>
)

const mapStateToProps = state => ({
  pullRequests: state.pullRequests,
});

export default connect(
  mapStateToProps,
)(PullRequests);

