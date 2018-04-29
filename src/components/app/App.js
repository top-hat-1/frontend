import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Projects from '../projects/Projects';

class App extends Component {

  render() {

    return (
      <Router>
        <div id="container">
          <header id="header">
            
            <nav>
              <ul>
                <li>Hello Nav</li>
              </ul>
            </nav>
          </header>
          <main id="main" role="main">
            <Switch>
              {/* <Route exact path="/" component={Home}/> */}
              <Route exact path="/projects" component={Projects}/>
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