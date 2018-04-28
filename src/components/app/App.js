import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends Component {

  render() {

    return (
      <Router>
        <div id="container">
          <header id="header">
            <h1></h1>
            <nav>
              <ul>
              </ul>
            </nav>
          </header>
          <main id="main" role="main">
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