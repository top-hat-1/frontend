import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// TODO STRETCH: Add a link to user by comment

class Comment extends Component {

  render() {

    if(!this.props.comment) return null;

    const { comment, name, userId  } = this.props.comment;

    return (
      <div>
        <li className="comment-li">
          <Link to={`user/${userId}/projects`}><h4>{name}</h4></Link>
          <p className="comment-box">{comment}</p>
        </li>
      </div>
    );
  }
}

export default connect(
  state => ({
    user: state.user
  }),
  null
)(Comment);