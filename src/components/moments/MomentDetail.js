import React, { Component } from 'react';
import { connect } from 'react-redux';
import { momentLoad } from './actions';

class MomentDetail extends Component {

  componentWillMount() {
    this.props.momentLoad(this.props.id);
  }

  render() {

    const { photo, category, caption } = this.props.moment;
    const { name } = this.props.project;

    return (
      <div>
        <h4>{name}</h4>
        <div className="image-wrap"> 
          <img src={photo}></img>
        </div>
        <div className="moment-details">
          <small>{category}</small>
          <p className="moment-caption">{caption}</p>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    owner: state.owner,
    moment: state.moment,
    project: state.project,
  }),
  { momentLoad }
)(MomentDetail);