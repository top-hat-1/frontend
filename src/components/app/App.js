import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect/*, Link*/ } from 'react-router-dom';
import { connect } from 'react-redux';
import Projects from '../projects/Projects';
import ProjectDetail from '../projects/ProjectDetail';
import Signup from '../forms/Signup';
import Signin from '../forms/Signin';

class App extends Component {

  render() {

    return (
      <Router>
        <div id="container">
          <header id="header">
            
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
          <footer role="contentinfo" id="footer">
            <section className="footer maxwidth-wrap"> 
              <p>(c) <a href="https://github.com/top-hat-1" target="_blank" rel="author noopener noreferrer">DabbleDo</a></p>
              <p>Created by: <a href="https://github.com/pereztjacob" target="_blank" rel="author noopener noreferrer">Jacob Perez</a> | <a href="https://github.com/lomax715" target="_blank" rel="author noopener noreferrer">Jack Lomax</a> | <a href="https://github.com/CharlyWelch" target="_blank" rel="author noopener noreferrer">Charly Welch</a> | <a href="https://github.com/heicj" target="_blank" rel="author noopener noreferrer">Charlie Heiner</a></p>
            </section>
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