import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Project extends Component {

  render() {

    const { _id, projectName, coverPhotoUrl, description, owner, name } = this.props;
    
    return (
      <li className="project-li">
        <div className="image-wrap"> 
          <h4><Link to={`/projects/${_id}`}>{projectName}</Link></h4>
          <h5>By {name}</h5>
          <Link to={`/projects/${_id}`}><img src={coverPhotoUrl} height={50} width={50}/></Link> {/*remove styling*/}
        </div>
        <div className="project-details">
          <p className="description-box">{description}</p>
        </div>
      </li>
    );
  }
}

export default connect(
  state => ({
    user: state.user,
  }),
  null
)(Project);