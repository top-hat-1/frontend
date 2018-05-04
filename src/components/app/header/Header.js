import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../forms/actions';
import '../app.css';

class Header extends Component {

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
        <header role="banner" id="header">
          <section className="head-container maxwidth-wrap">
            <Link to="/" className="no-line"><h1 className="logo">DabbleDo</h1></Link>
            <div>
              <nav id="main-menu">
                <Link to="/" className="no-line1"><h1 className="mobile-logo">DabbleDo</h1></Link>
                <section className="header">
                  <li><Link to={'/projects'}>Explore</Link></li>
                  {
                    state.auth
                      ? <div>
                        <li><button className="logout-button" onClick={this.handleLogOut}>Log out</button></li>
                        <li><Link to={`/user/${state.auth._id}/projects`}>My Profile</Link></li>
                        <li><Link to={'/following'}>Friends</Link></li>
                      </div>
                      :
                      <Fragment>
                        <li><Link to={{ 
                          pathname: '/auth/signin', 
                        }}>Sign In</Link></li>
                        <li><Link to={{ 
                          pathname: '/auth/signup', 
                        }}>Sign Up</Link></li>
                      </Fragment>
                  }
                </section>
              </nav>
            </div>
          </section> 
        </header>
      );
    }
}

export default connect(
  state => ({
    state: state,
  }),
  { signOut }
)(Header);