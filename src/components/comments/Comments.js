import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Loading from '../app/error-loading/Loading';
import Comment from './Comment';
import AddCommentForm from './AddCommentForm'; 

class Comments extends Component {

  render() {

    // if(!this.props.project) return null;
    if(!this.props.comments) return null;

    const { comments } = this.props;

    return (
      <Fragment>
        <AddCommentForm projectId={this.props.projectId}/>
        {comments && comments[0] ?
          <div>
            <ul className="comments-ul">
              {comments.map((comment, index) => <Comment key={index} {...comment}/>)}
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
    project: state.project,
  }),
  null
)(Comments);