import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProject } from './actions';
import AddImage from '../forms/AddImage';

//TODO: completed button for marking as finished.... the rest of the data for a project

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
      owner: this.props.owner._id
    });
  };
  // TODO: clear fields... setState?

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { projectName, description } = this.state;
    let owner = null;
    if(this.props.owner){
      owner = this.props.owner._id;
    }
    return (
      <div>
        <div>
          <AddImage/>
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
            <button type="submit">Add Project</button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({ image: state.imageAdd, owner: state.auth }),
  { addProject }
)(AddProjectForm);