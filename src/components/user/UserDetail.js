import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Projects from '../projects/Projects';
import AddProjectForm from '../projects/AddProjectForm';
import FollowButton from '../follow/FollowButton';

// TODO get user into state, map to props

class UserDetail extends Component {

  render() {

    const { _id, name, hobbies, photo } = this.props.user;  // _id belongs to the user whose page we are viewing, 
    const authUser = this.props.userId;    //authUser is signed in user


    return (
      <Fragment className="user-detail">
        <div>
          <h2>{name}</h2>
          <img className="user-photo" src={photo}/>
          <p className="hobby-box">{hobbies}</p>
          {authUser !== _id 
            ?
            <div className="follow-button-container">
              <FollowButton userId={authUser} followId={_id}/>
            </div>
            : 
            <div className="add-project-container">
              <AddProjectForm/>
            </div>
          }
        </div>
        <Projects userId={_id}/>
      </Fragment>
    );
  }
}

export default connect(
  state => ({
    user: state.user
  }),
)(UserDetail);