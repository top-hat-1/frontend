import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getFollowing } from './actions';
import Project from '../projects/Project';

class Following extends PureComponent {

  componentDidMount(){
    const { id } = this.props;
    this.props.getFollowing(id);   
  }

  render() {

    const { following } = this.props;
    let projectsArray = [].concat.apply([], following);
    projectsArray = projectsArray.sort((a, b) => {
      return new Date(a.dateAdded) - new Date(b.dateAdded);
    }).reverse();

    return (
      <div className="Following list">
        {following[0] ?
          <ul>
            {projectsArray.map((project, index) => <Project key={index} {...project}/>)}
          </ul>
          : 
          <div>
            <h2>You aren't currently following anyone</h2>
            <Link to='/projects'><p>Find some friends to follow!</p></Link>
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