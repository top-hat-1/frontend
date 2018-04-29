import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addProject } from './actions';

//TODO: add file upload, completed button for marking as finished, date handling.... the rest of the data for a project

class AddProjectForm extends Component {

  // constructor(props) {
  //   super(props);
    
    state = {
      projectName: '',
      // completed: false,
      description: '',
    };
  // }

  handleSubmit = event => {
    event.preventDefault();
    const { addProject, history } = this.props;
    const newProject = { ...this.state };
    
    addProject(newProject)
      .then(({ _id }) => {
        history.pushState(`/projects/${_id}`);
      });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { projectName, description } = this.state;

    return (
      <div>
        <form className="add-project-form" onSubmit={this.handleSubmit}>
          <label htmlFor="projectName">
            <input 
              name="projectName"
              required 
              placeholder={projectName ? { projectName } : 'Project Name'}
              value={projectName}
              onChange={this.handleChange}/>
          </label>
          <label htmlFor="description">
            <input 
              name="description" 
              placeholder={description ? { description } : 'Description'}
              value={description}
              onChange={this.handleChange}/>
          </label>
          <button type="submit">Add</button>
        </form>

      </div>
    );
  }
}

export default withRouter(connect(
  null,
  { addProject }
)(AddProjectForm));