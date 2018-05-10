import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addToFollowing } from './actions';

class FollowButton extends PureComponent {
 
  handleClick(followId, userId){
    this.props.addToFollowing(followId, userId);
  }

  render() {

    const { followId, userId, following } = this.props;
    // let amFollowing = false;
    // for(let i = 0; i < following.length; i++){
    //   if(following[i][0].owner === userId) {
    //     amFollowing = true;
    //   }
    // };   Will need to dig deeper - each position has arrays inside... 

    return (
      <button onClick={() => { this.handleClick(followId, userId); }}>Follow</button>
    );
  }
}

export default connect(
  state => ({
    following: state.following,
  }),
  { addToFollowing }
)(FollowButton);