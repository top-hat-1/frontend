import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Moment extends Component {

  render() {

    const { projectId, _id, caption, photoUrl, category } = this.props;

    return (
      <li className="moment-li">
        <div className="image-wrap">
          <Link to={`/moments/${_id}`}><img src={photoUrl}/></Link>
        </div>
        <div className="moment-details">
        <Link to={`/moments/${_id}`}><p>{caption}</p></Link>
        <small>{category}</small>
        </div>
      </li>
    );
  }
}

export default connect(
  state => ({
    user: state.user,
  }),
  null
)(Moment);