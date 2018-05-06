import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../forms/actions';
import projectsApi from '../../../services/projectsApi';
import '../app.css';

class Header extends Component {

  constructor(props) {
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
    
    handleLogOut = event => {
      event.preventDefault();
      this.props.signOut();
    };

    handleClick = () => {
      const { auth, history } = this.props;
      projectsApi.loaduser(auth._id)
        .then(() => {
          history.push(`/user/${auth._id}/projects`);
        });
    }

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
                        {/* <li onClick={this.handleClick}><Link to={`/user/${state.auth._id}/projects`}>My Profile</Link></li> */}
                        <li onClick={this.handleClick}>My Profile</li>
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

export default withRouter(connect(
  state => ({
    state: state,
    auth: state.auth
  }),
  { signOut }
)(Header));