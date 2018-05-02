import React, { Component, Fragment } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {

  render() {

    const { state } = this.props;
    console.log(this.props);

    return (
      <section className="header">
        {
          state.auth
            ? <div>
              <p>User Info Here</p>
              <h2>{this.props.state.auth.name}</h2>
            </div>
            :
            <Fragment>
              <p>No User (redirect)</p>
            </Fragment>
        }
      </section>
    );
  }
}

export default connect(
  state => ({
    state: state
  }),
)(Navbar);