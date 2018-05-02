import React, { Component } from 'react';
import { connect } from 'react-redux';

class MomentDetail extends Component {

  render() {

    const { projectId, id } = this.props;
    const { moments } = this.props;

    const result = moments.find(element => {
      return element._id === id;
    });

    // TODO: find projectName and put it h4 above the moment photo
    const { photoUrl, caption, category } = result;

    return (
      <div>
        <h4></h4>
        <div className="image-wrap"> 
          <img src={photoUrl}></img>
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
    moments: state.moments
  }),
  null
)(MomentDetail);