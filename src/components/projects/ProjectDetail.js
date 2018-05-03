import React, { Component } from 'react';
import { connect } from 'react-redux';
import { projectLoad } from './actions';
import Moments from '../moments/Moments';
import Comments from '../comments/Comments';
import { commentsLoad } from '../comments/actions';
import { momentsLoad } from '../moments/actions';

class ProjectDetail extends Component {

  componentDidMount() {
    this.props.projectLoad(this.props.id);
    this.props.momentsLoad(this.props.id);
    this.props.commentsLoad(this.props.id);
  }
  
  render() {
    const { project, projects, id, comments } = this.props;
    
    const result = projects[0] ? 
      projects.find(element => {
        return element._id === id;
      }) : project;

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

export default connect(
  state => ({
    owner: state.owner,
    projects: state.projects,
    project: state.project,
    comments: state.comments.comments,
  }),
  { projectLoad, commentsLoad, momentsLoad }
)(ProjectDetail);