import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


// TODO: call projects component. 
//follow button. 
//add project form IF userid of profile matches signed in user

class Navbar extends Component {

  render() {

    const { state } = this.props;
    console.log(this.props);

    return (
      <section className="header">
        {
          state.auth
            ? <div>
              <p>User Info Here</p>
              <h2>{this.props.state.auth.name}</h2>
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
)(Navbar);