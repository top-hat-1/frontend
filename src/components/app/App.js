import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect/*, Link*/ } from 'react-router-dom';
import { connect } from 'react-redux';
import Projects from '../projects/Projects';
import ProjectDetail from '../projects/ProjectDetail';
import MomentDetail from '../moments/MomentDetail';
import Signup from '../forms/Signup';
import Signin from '../forms/Signin';
import Footer from './footer/Footer';
import Navbar from '../nav/Navbar';
import UserDetail from '../user/UserDetail';


// the users/:id/projects route should work for any user - see my projects, pull your id, or click on someone else and get their id

class App extends Component {

  render() {

    return (
      <Router>
        <div id="container">
          <header id="header">
            <Navbar/>
            <nav>
              <ul>
                <a href="/projects"><li>Hello Nav</li></a>
              </ul>
            </nav>
          </header>
          <main id="main" role="main">
            <Switch>
              {/* <Route exact path="/" component={Home}/> */}
              <Route exact path="/projects/:id" render={({ match }) => <ProjectDetail id={match.params.id}/>} />
              <Route exact path="/projects" component={Projects}/>
              <Route exact path="/projects/:projectId/moments/:id" render ={({ match }) => <MomentDetail id={match.params.id}/>} />
              <Route exact path="/auth/signup" component={Signup}/>
              <Route exact path="/auth/signin" component={Signin}/>
              <Route exact path="/user/:id/projects" render={({ match }) => <Projects userId={match.params.id}/>} /> 
              <Route exact path="/user" component={UserDetail}/>
              <Redirect to="/"/>
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
    error: state.error
  }),
  null
)(App);