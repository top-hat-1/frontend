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
    if(localStorage.getItem('token')) {
      let auth = {};
      auth.name = localStorage.getItem('name');
      auth._id = localStorage.getItem('_id');
      this.props.loadUser(this.props.userId);
      this.props.projectsLoad(this.props.userId);
    }
  }

  render() {

    if(!this.props.user) return null;

    const { _id, name, hobbies, photo } = this.props.user;  // _id belongs to the user whose page we are viewing, 
    const authUser = this.props.userId;    //authUser is signed in user

    return (

      <Fragment>
        <div className="user-detail">
          <h2>{name}</h2>
          <img className="user-photo" src={photo}/>
          <p className="hobby-box">{hobbies}</p>
          {authUser !== _id 
            ?
            <div className="follow-button-container">
              <FollowButton followId={_id} userId={authUser}/>
            </div>
            : 
            <Fragment>
              <div className="edit-profile-button">
                <Link to="/edituser">✎</Link>
              </div>
              <div className="add-project-container">
                <AddProjectForm/>
              </div>
            </Fragment>
          }
        </div>
        <Projects userId={_id}/>
      </Fragment>
    );
  }
}

export default connect(
  state => ({
    state: state,
    user: state.user
  }),
  { loadUser, projectsLoad }
)(UserDetail);
