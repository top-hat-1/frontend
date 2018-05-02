import React, { Component } from 'react';
import { connect } from 'react-redux';
import { projectLoad } from './actions';
import Moments from '../moments/Moments';
import Comments from '../comments/Comments';
import { commentsLoad } from '../comments/actions';

class ProjectDetail extends Component {

  componentDidMount() {
    this.props.projectLoad(this.props.id);
    this.props.commentsLoad(this.props.id);
  }

  render() {

    const { projects, id, comments } = this.props;

    const result = projects ? 
      projects.find(element => {
        return element._id === id;
      }) : this.state.project;
  
    

    if(!result) return null;
    const { projectName, coverPhotoUrl, description, _id } = result;

    return (
      <div>
        <h4>{projectName}</h4>
        <div className="image-wrap"> 
          <img src={coverPhotoUrl}></img>
        </div>
        <div className="project-details"> 
          <p className="description-box">{description}</p>
        </div>
        <Moments projectId={id}/> 
        <Comments projectId={_id} comments={comments}/>
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
    comments: state.comments.comments
  }),
  { projectLoad, commentsLoad }
)(ProjectDetail);