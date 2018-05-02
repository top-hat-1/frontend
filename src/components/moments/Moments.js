import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Loading from '../app/error-loading/Loading';
import Moment from './Moment';
import AddMomentForm from './AddMomentForm'; 

class Moments extends Component {

  render() {

    if(!this.props.project) return null;
    if(!this.props.project.moments) return null;
    const { moments, owner } = this.props.project;

    let userId = null;
    if(this.props.auth) {
      userId = this.props.auth._id;
    }

    return (
      <Fragment>
        {userId === owner ?
          <AddMomentForm projectId={this.props.projectId}/>
          : null}
        {moments && moments[0] ?
          <div>
            <ul className="moments-ul">
              {moments.map((moment, index) => <Moment key={index} {...moment} />)}
            </ul>
          </div>
          : <Loading/>
        }
      </Fragment>
    );
  }
}

export default connect(
  state => ({
    loading: state.loading,
    project: state.project,
    auth: state.auth
  }),
  null
)(Moments);