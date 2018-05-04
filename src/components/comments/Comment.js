import React, { Component } from 'react';
import { connect } from 'react-redux';

// TODO STRETCH: Add a link to user by comment

class Comment extends Component {

  render() {

    const { comment  } = this.props;

    return (
      <div>
        <li className="comment-li">
          {/* <img className="comment-photo" src={user.photo}/> */}
          {/* <h4>{user.name}</h4> */}
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