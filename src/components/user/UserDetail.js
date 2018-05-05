import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadUser } from '../app/actions';
import { projectsLoad } from '../projects/actions';
import Projects from '../projects/Projects';
import AddProjectForm from '../projects/AddProjectForm';
import FollowButton from '../follow/FollowButton';

class UserDetail extends Component {

  componentWillMount(){
    this.props.loadUser(this.props.userId);
    this.props.projectsLoad(this.props.userId);
  }
  
  componentDidMount(){
    this.props.projectsLoad(this.props.userId);
    this.props.loadUser(this.props.userId).then(r => this.setState({ user: r }));
  }

  render() {

    if(!this.props.user) return null;

    const { _id, name, hobbies, photo } = this.props.user;   
    let authUser = null;
    if(this.props.auth) {
      authUser = this.props.auth._id;    
    }

    return (

      <Fragment>
        <div className="user-detail">
          <h2>{name}</h2>
          <img className="user-photo" src={photo}/>
          <p className="hobby-box">{hobbies}</p>
          { authUser ?
            (authUser !== _id ?
              <div className="follow-button-container">
                <FollowButton followId={_id} userId={authUser}/>
              </div>
              : 
              <div>
                <div className="edit-profile-button">
                  <Link to="/edituser">✎</Link>
                </div>
                <div className="add-project-container">
                  <AddProjectForm/>
                </div>
              </div>
            )
            : null
          }
          <Projects userId={_id}/>
        </div>
      </Fragment>
    );
  }
}

export default connect(
  state => ({
    user: state.user,
    auth: state.auth,
    projects: state.projects
  }),
  { loadUser, projectsLoad }
)(UserDetail);
