import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../app.css';

export default class Header extends Component {

  render() { 
    return (
      <header role="banner" id="header">
        <section className="head-container maxwidth-wrap">
          <Link to="/" className="no-line"><h1 className="logo">DabbleDo</h1></Link>
          <div>
            <nav id="main-menu">
              <Link to="/" className="no-line1"><h1 className="mobile-logo">DabbleDo</h1></Link>
            </nav>
          </div>
        </section> 
      </header>
    );
  }
}
