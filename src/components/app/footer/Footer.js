import React, { Component } from 'react';
import '../app.css';

export default class Footer extends Component {

  render() { 
    return (
      <footer role="contentinfo" id="footer">
        <section className="footer maxwidth-wrap"> 
          <p>(c) <a href="https://github.com/top-hat-1" target="_blank" rel="author noopener noreferrer">DabbleDo</a></p>
          <p>Created by: <a href="https://github.com/pereztjacob" target="_blank" rel="author noopener noreferrer">Jacob Perez</a> | <a href="https://github.com/lomax715" target="_blank" rel="author noopener noreferrer">Jack Lomax</a> | <a href="https://github.com/CharlyWelch" target="_blank" rel="author noopener noreferrer">Charly Welch</a> | <a href="https://github.com/heicj" target="_blank" rel="author noopener noreferrer">Charlie Heiner</a></p>
        </section>
      </footer>
    );
  }
}