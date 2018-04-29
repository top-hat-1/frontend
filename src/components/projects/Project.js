import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

class Project extends Component {

  render() {

    return (
      <li className="project-li">
        <div>
          <p>Project Goes Here</p>
        </div>
      </li>
    );
  }
}

export default connect(
  null,
  null
)(Project);