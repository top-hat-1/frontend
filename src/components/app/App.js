import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect/*, Link*/ } from 'react-router-dom';
import { connect } from 'react-redux';
import Projects from '../projects/Projects';
import ProjectDetail from '../projects/ProjectDetail';
import Signup from '../forms/Signup';
import Signin from '../forms/Signin';
import Navbar from '../nav/Navbar';

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
              <Route exact path="/auth/signup" component={Signup}/>
              <Route exact path="/auth/signin" component={Signin}/>
              <Redirect to="/"/>
            </Switch>
          </main>
          <footer id="footer">
            <small>&copy; 2018 Charlie Heiner | Jack Lomax | Jacob Perez | Charly Welch </small>
          </footer>
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