import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadUser } from '../app/actions';

class Navbar extends Component {

  componentDidMount(){
    if(localStorage.getItem('token')) {
      let auth = {};
      auth.name = localStorage.getItem('name');
      auth._id = localStorage.getItem('_id');
      this.props.loadUser(auth._id);
    }
  }

  render() {

    const { state } = this.props;
    console.log(this.props);

    return (
      <section className="header">
        {
          state.auth
            ? <div>
              <p>User Info Here</p>
              <h2>{state.auth.name}</h2>
              <img src={state.photo}/>
              <p>{state.hobbies}</p>
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
  state => ({
    state: state
  }),
  { loadUser }
)(Navbar);