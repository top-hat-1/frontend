import React, { Component } from 'react';
import { connect } from 'react-redux';

class MomentDetail extends Component {

  render() {

    const { id, moments, projectName } = this.props;

    const result = moments.find(element => {
      return element._id === id;
    });

    const { photoUrl, caption, category } = result;

    return (
      <div>
        <h4>{projectName}</h4>
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
    moments: state.project.moments,
    projectName: state.project.projectName
  }),
  null
)(MomentDetail);