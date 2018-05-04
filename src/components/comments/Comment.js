import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Comment extends Component {

  render() {

    const { comment, name, userId } = this.props;

    return (
      <div>
        <li className="comment-li">
          <Link to={`/user/${userId}/projects`}><h4>{name}</h4></Link>
          <p className="comment-box">{comment}</p>
        </li>
      </div>
    );
  }
}

export default connect(
  state => ({
    user: state.user,
    comments: state.comments
  }),
  null
)(Comment);