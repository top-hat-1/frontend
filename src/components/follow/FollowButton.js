import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addToFollowing } from './actions';

class FollowButton extends PureComponent {

  handleClick(followId, userId){
    this.props.addToFollowing(followId, userId);
  }

  render() {

    const { followId, userId } = this.props;

    return (
      <button onClick={() => { this.handleClick(followId, userId); }}>Follow</button>
    );
  }
}

export default connect(
  null,
  { addToFollowing }
)(FollowButton);