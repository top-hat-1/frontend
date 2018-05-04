import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// import { getFollowing } from './actions';
import Project from '../projects/Project';

class Following extends PureComponent {

  componentDidMount(){
    // const { _id } = this.props;
    // this.props.getFollowing(_id);
  }
  render() {

    // const { following } = this.props;
    const following = [[{ projectName: 'test-one', description: 'test-one' }, { projectName: 'test-two', description: 'test-two' }], [{ projectName: 'test-one', description: 'test-two' }, { projectName: 'test-three', description: 'test-three' }, { projectName: 'test-four', description: 'test-four' }]];
    const projectsArray = [].concat.apply([], following);

    return (
      <div className="Following list">
        <ul>
          {projectsArray.map((project, index) => <Project key={index} {...project}/>)}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({ auth: state.auth, following: state.following }),
  // { getFollowing }
  null
)(Following);