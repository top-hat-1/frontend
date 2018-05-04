import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Project extends Component {

  render() {

    const { _id, projectName, coverPhotoUrl, description, owner } = this.props;
    
    return (
      <li className="project-li">
        <div className="image-wrap"> 
          <h4><Link to={`/projects/${_id}`}>{projectName}</Link></h4>
          {(owner.length < 20) ? <h6>{owner}</h6> : null}
          <Link to={`/projects/${_id}`}><img src={coverPhotoUrl} height={50} width={50}/></Link> {/*remove styling*/}
        </div>
        <div className="project-details">
          <p className="description-box">{description}</p>
        </div>
      </li>
    );
  }
}

//TODO: conditional to check for user and give option of commenting
// check if this is the current user's project, give option of deleting or editing the project -- call a component that opens the project in a form and has a remove button. 

export default connect(
  state => ({
    user: state.user,
  }),
  null
)(Project);