import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadUser } from '../app/actions';

// TODO: call projects component. 
//follow button. 
//add project form IF userid of profile matches signed in user

class UserDetail extends Component {

  componentWillMount(){
    if(localStorage.getItem('token')) {
      let auth = {};
      auth.name = localStorage.getItem('name');
      auth._id = localStorage.getItem('_id');
      this.props.loadUser(this.props.userId.userId);
    }
  }

  render() {

    const { state } = this.props;
    // const { userId } = this.props;

    console.log(this.props);

    return (
      <section className="header">
        {
          state.addUserToState
            ? <div>
              <p>User Info Here</p>
              <h2>{state.addUserToState.name}</h2>
              <img src={state.addUserToState.photo}/>
              <p>{state.addUserToState.hobbies}</p>
              <button><Link to={'/edituser'}>Edit</Link></button>
            </div>
            :
            <Fragment>
              <p>No User (redirect)</p>
            </Fragment>
        }
      </section>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    state: state,
    userId: ownProps
  }),
  { loadUser }
)(UserDetail);