import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { projectLoad, projectsLoad } from './actions';
import { getFollowing } from '../follow/actions';
import Loading from '../app/error-loading/Loading';
import Project from './Project';

class Projects extends Component {

  componentDidMount() {
    this.props.userId ?  
      this.props.projectsLoad(this.props.userId) 
      :
      this.props.projectsLoad();
    if(this.props.auth) {
      const id = this.props.auth._id;
      this.props.getFollowing(id);
    }
  }

  render() {

    const { projects } = this.props;

    return (
      <Fragment>
        {projects && projects[0] ?
          <div>
            <h3 className="projects-title">Projects</h3>
            <ul className="projects-ul">
              {projects.reverse().map((project, index) => <Project key={index} {...project}/>)}
            </ul>
          </div>
          : <Loading/>
        }
      </Fragment>
    );
  }
}

export default connect(
  state => ({
    loading: state.loading,
    projects: state.projects,
    auth: state.auth
  }),
  { projectsLoad, projectLoad, getFollowing }
)(Projects);