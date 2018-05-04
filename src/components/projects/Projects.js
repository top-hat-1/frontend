import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { projectLoad, projectsLoad } from './actions';
import Loading from '../app/error-loading/Loading';
import Project from './Project';

class Projects extends Component {

  componentDidMount() {
    this.props.userId ?  // did a userId get passed as a prop on this? 
      this.props.projectsLoad(this.props.userId) // then load that user's projects.... link in nav bar to users/:id/projects, call Projects component w/ userId=match params
      :
      this.props.projectsLoad(); // else call without user id if we're not looking for a specific user
  }

  render() {

    const { projects } = this.props;

    return (
      <Fragment>
        {projects && projects[0] ?
          <div>
            <h3 className="projects-title">Projects</h3>
            <ul className="projects-ul">
              {projects.map((project, index) => <Project key={index} {...project}/>)}
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
  }),
  { projectsLoad, projectLoad }
)(Projects);