import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addToFollowing } from './actions';

class FollowButton extends PureComponent {

  handleClick(){
    const followId = this.props;
    const userId = this.props;
    this.props.addToFollowing(followId, userId);
  }
  render() {

    return (
      <button onClick={this.handleClick}>Follow</button>
    );
  }
}

export default connect(
  null,
  { addToFollowing }
)(FollowButton);