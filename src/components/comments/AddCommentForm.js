import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from './actions';

class AddCommentForm extends Component {

  state = {
    userId: this.props.userId, 
    comment: '',
    target: this.props.projectId, 
    projectId: this.props.projectId,
    name: this.props.name
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addComment({
      ...this.state
    });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { comment } = this.state;

    return (
      <div>
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <label htmlFor="comment">
            <input
              name="comment"
              placeholder="Comment on this project"
              value={comment}
              onChange={this.handleChange}/>
          </label>
          <button type="submit">Add Comment</button>
        </form>
      </div>
    );
  }
}

export default connect(
  state => ({
    userId: state.auth._id,
    name: state.auth.name
  }),
  { addComment }
)(AddCommentForm);