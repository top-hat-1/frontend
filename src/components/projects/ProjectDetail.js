import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProjectDetail extends Component {

  render() {

    const { projectName, photoUrl, description } = this.props;  // find a way to link to the owner - 'see all projects by (owner.name)'

    return (
      <li className="project-li">
        <div className="image-wrap"> 
          <img src={photoUrl}></img>
        </div>
        <div className="project-details"> 
          <h4>{projectName}</h4>
          <p className="description-box">{description}</p>
        </div>
      </li>
    );
  }
}

//TODO: conditional to check for user and give option of commenting, call AddComment component
// check if this is the current user's project, give option of deleting or editing the project -- call a component that opens the project in a form and has a remove button. 
// call Moments components - use projects/userId/projectId/
// link to the user who created this project

export default connect(
  state => ({
    owner: state.owner,
  }),
  null
)(ProjectDetail);