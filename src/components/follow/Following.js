import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getFollowing } from './actions';
import Project from '../projects/Project';

class Following extends PureComponent {

  componentDidMount(){
    const { _id } = this.props.auth;
    this.props.getFollowing(_id);   // need to handle no following
  }

  render() {

    const { following } = this.props;
    const projectsArray = [].concat.apply([], following);

    return (
      <div className="Following list">
        {following[0] ?
          <ul>
            {projectsArray.map((project, index) => <Project key={index} {...project}/>)}
          </ul>
          : 
          <div>
            <h2>You aren't currently following anyone</h2>
            <Link to='/projects'><p>Go find some friends!</p></Link>
          </div>
        }
      </div>
    );
  }
}

export default connect(
  state => ({ 
    auth: state.auth, 
    following: state.following }),
  { getFollowing }
)(Following);