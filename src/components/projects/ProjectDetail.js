import React, { Component } from 'react';
import { connect } from 'react-redux';
import { projectLoad } from './actions';
import Moments from '../moments/Moments';

class ProjectDetail extends Component {

  componentWillMount() {
    const id = this.props.id;
    this.props.projectLoad(id);
  }

  render() {

    const { projects, id } = this.props;

    const result = projects.find(element => {
      return element._id === id;
    });

    const { projectName, coverPhotoUrl, description } = result;  // find a way to link to the owner - 'see all projects by (owner.name)'

    return (
      <div>
        <div className="image-wrap"> 
          <img src={coverPhotoUrl}></img>
        </div>
        <div className="project-details"> 
          <h4>{projectName}</h4>
          <p className="description-box">{description}</p>
        </div>
        <Moments projectId={id}/>
      </div>
    );
  }
}

//TODO: conditional to check for user and give option of commenting, call AddComment component
// check if this is the current user's project, give option of deleting or editing the project 
// -- call a component that opens the project in a form and has a remove button. 
// call Moments components - use projects/userId/projectId/
// link to the user who created this project
// if current user's project call AddMomentForm

export default connect(
  state => ({
    owner: state.owner,
    projects: state.projects,
    project: state.project,
  }),
  { projectLoad }
)(ProjectDetail);