import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProject } from './actions';
import AddImage from '../forms/AddImage';

class AddProjectForm extends Component {

    state = {
      projectName: '',
      description: '',
    };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addProject({
      ...this.state,
      coverPhotoUrl: this.props.image,
      owner: this.props.owner._id,
      name: this.props.owner.name
    });
    this.setState({ projectName: '' });
    this.setState({ description: '' });
  };
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { projectName, description } = this.state;
    return (
      <div className="div2">
        <AddImage/>
        <form className="add-project-form" onSubmit={this.handleSubmit}>
          <label htmlFor="projectName">
            <input className="project-placeholder"
              name="projectName"
              required 
              placeholder={projectName ? { projectName } : 'Project Name'}
              value={projectName}
              onChange={this.handleChange}/>
          </label>
          <label htmlFor="description">
            <input className="project-placeholder"
              name="description" 
              placeholder={description ? { description } : 'Short Description'}
              value={description}
              onChange={this.handleChange}/>
          </label>
          <button type="submit">Add Project</button>
        </form>
      </div>
    );
  }
}

export default connect(
  state => ({ image: state.imageAdd, owner: state.auth }),
  { addProject }
)(AddProjectForm);