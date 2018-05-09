import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect/*, Link*/ } from 'react-router-dom';
import { connect } from 'react-redux';
import Projects from '../projects/Projects';
import ProjectDetail from '../projects/ProjectDetail';
import MomentDetail from '../moments/MomentDetail';
import Signup from '../forms/Signup';
import Signin from '../forms/Signin';
import Header from './header/Header';
import Footer from './footer/Footer';
import UserDetail from '../user/UserDetail';
import EditUser from '../user/EditUser';
import Following from '../follow/Following';
import { setUserToState, loadUser } from './actions';

class App extends Component {

  componentWillMount() {
    let auth = null;
    if(localStorage.getItem('token')) {
      auth = {};
      auth.name = localStorage.getItem('name');
      auth._id = localStorage.getItem('_id');
    }
    this.props.setUserToState(auth);
  }
  
  render() {    

    return (
      <Router>
        <div id="container">
          <Header/>
          <main id="main" role="main">
            <Switch>
              <Route exact path="/moments/:id" render ={({ match }) => <MomentDetail id={match.params.id}/>} />
              <Route exact path="/projects/:id" render={({ match }) => <ProjectDetail id={match.params.id}/>} />
              <Route exact path="/projects" component={Projects}/>
              <Route exact path="/auth/signup" component={Signup}/>
              <Route exact path="/auth/signin" component={Signin}/>
              <Route exact path="/user/:id/projects" render={({ match }) => <UserDetail userId={match.params.id}/>} /> 
              <Route exact path="/user" component={UserDetail}/>
              <Route exact path="/edituser" component={EditUser}/>
              <Route exact path="/:id/following" render ={({ match }) => <Following id={match.params.id}/>} />
              <Redirect to="/projects"/>
            </Switch>
          </main>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default connect(
  state => ({ 
    loading: state.loading,
    error: state.error,
    state: state
  }),
  { setUserToState, loadUser }
)(App);