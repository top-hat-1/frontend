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
import Navbar from '../nav/Navbar';
import UserDetail from '../user/UserDetail';
import EditUser from '../user/EditUser';
import { setUserToState, loadUser } from './actions';


// the users/:id/projects route should work for any user - to see your projects, pull your id, or click on someone else and get their id
// <Link to={`/users/${userId}/projects`}> Whatever you want to be the link </Link> where userId is pulled off state and passed in
// this can be applied to user photos anywhere they appear throughout the app.
class App extends Component {

  componentWillMount() {
    const auth = {};
    if(localStorage.getItem('token')) {
      auth.name = localStorage.getItem('name');
      auth._id = localStorage.getItem('_id');
      // this.props.loadUser(auth._id);
    }
    this.props.setUserToState(auth);
  }
  
  render() {    

    return (
      <Router>
        <div id="container">
          <Header/>
          <Navbar/>
          <main id="main" role="main">
            <Switch>
              {/* <Route exact path="/" component={Home}/> */}
              <Route exact path="/projects/:projectId/moments/:id" render ={({ match }) => <MomentDetail id={match.params.id}/>} />
              <Route exact path="/projects/:id" render={({ match }) => <ProjectDetail id={match.params.id}/>} />
              <Route exact path="/projects" component={Projects}/>
              <Route exact path="/auth/signup" component={Signup}/>
              <Route exact path="/auth/signin" component={Signin}/>
              <Route exact path="/user/:id/projects" render={({ match }) => <UserDetail userId={match.params.id}/>} /> 
              <Route exact path="/edituser" component={EditUser}/>
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