import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../forms/actions';

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

    handleLogOut = event => {
      event.preventDefault();
      this.props.signOut();
    };

    render() {

      const { state } = this.props;

      return (
        <Fragment>
          <section className="header">
            <li><Link to={'/projects'}>Explore</Link></li>
            {
              state.auth 
                ? <div>
                  <li><button onClick={this.handleLogOut}>Log out</button></li>
                  <li><Link to={'/user'}>My Profile</Link></li>
                  <li><Link to={'#'}>My Projects</Link></li>
                </div>
                :
                <div>
                  <li><Link to={{ 
                    pathname: '/auth/signin', 
                  }}>Sign In</Link></li>
                  <li><Link to={{ 
                    pathname: '/auth/signup', 
                  }}>Sign Up</Link></li>
                </div>
            }
          </section>
        </Fragment>
      );
    }
}

export default connect(
  state => ({
    state: state
  }),
  { signOut }
)(Navbar);