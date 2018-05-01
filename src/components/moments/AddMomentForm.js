import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMoment } from './actions';
import AddImage from '../forms/AddImage';

class AddMomentForm extends Component {

  state = {
    category: '',
    caption: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addMoment({
      ...this.state,
      photoUrl: this.props.image
    });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  
  handleCategoryChange = changeEvent => {
    this.setState({
      category: changeEvent.target.value
    });
  };

  render() {

    const { caption } = this.state; 

    return (
      <div>
        <AddImage/>
        <form className="add-moment-form" onSubmit={this.handleSubmit}>
          <label htmlFor="caption">
            <input
              name="caption"
              value={caption}
              onChange={this.handleChange}/>
          </label>
          <div className="radio">
            <label htmlFor="category">
              <input type="radio" value="before" 
                name="category" checked={this.state.category === 'before'}
                onChange={this.handleCategoryChange}/>
              Before
            </label>
          </div>
          <div className="radio">
            <label htmlFor="category">
              <input type="radio" value="in-progress" 
                name="category" checked={this.state.category === 'inProgress'}
                onChange={this.handleCategoryChange}/>
              In Progress
            </label>
          </div>
          <div className="radio">
            <label htmlFor="category">
              <input type="radio" value="after" 
                name="category" checked={this.state.category === 'after'}
                onChange={this.handleCategoryChange}/>
              After
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  state => ({ image: state.imageAdd }),
  { addMoment }
)(AddMomentForm);