import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { momentsLoad } from './actions';
import Loading from '../app/error-loading/Loading';
import Moment from './Moment';
import AddMomentForm from './AddMomentForm'; 

class Moments extends Component {

  // state = {
  //   projectId: this.props.id,
  //   // moments: this.props
  // };

  render() {

    if(!this.props.project) return null;
    if(!this.props.project.moments) return null;
    const { moments } = this.props.project;



    return (
      <Fragment>
        <AddMomentForm projectId={this.props.id}/>
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
    project: state.project
  }),
  { momentsLoad }
)(Moments);