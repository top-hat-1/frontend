import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { loadProjects } from './actions';
import Loading from '../app/error-loading/Loading';
import Project from './Project';
import AddProjectForm from './AddProjectForm';

class Projects extends Component {

  componentDidMount() {
    this.props.loadProjects();
  }

  render() {

    const { projects } = this.props;

    return (
      <Fragment>
        <AddProjectForm/>
        {projects && projects[0] ?
          <div>
            <h3 className="projects-title">Projects</h3>
            <ul className="projects-ul">
              {projects.map((project, index) => <Project key={index} {...project} />)}
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
    projects: state.projects
  }),
  { loadProjects }
)(Projects);