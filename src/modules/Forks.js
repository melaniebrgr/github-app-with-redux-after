import React from "react"
import { connect } from "react-redux";

const Forks = ({ forks }) => (
  <React.Fragment>
    <h3>Forks</h3>
    <div>
      { forks.map(fork => (
        <div key={fork.id}>
          <h5><a href={fork.url}>{ fork.name }</a></h5>
        </div>
      )) }
    </div>
  </React.Fragment>
)

const mapStateToProps = state => ({
  forks: state.forks,
});

export default connect(
  mapStateToProps,
)(Forks);

