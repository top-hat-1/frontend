import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { loadMoments } from './actions';
import Loading from '../app/error-loading/Loading';
import Moment from './Moment';
// import AddMomentForm from './AddMomentForm'; // or call this in project

class Moments extends Component {
  componentDidMount() {
    this.props.loadMoments();
  }

  render() {

    const { moments } = this.props;

    return (
      <Fragment>
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
    moments: state.moments
  }),
  { loadMoments }
)(Moments);