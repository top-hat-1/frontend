import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Loading from '../app/error-loading/Loading';
import Comment from './Comment';
import AddCommentForm from './AddCommentForm'; 

class Comments extends Component {

  render() {

    if(!this.props.comments) return null;
    let userId = null;
    if(this.props.auth) {
      userId = this.props.auth._id;
    }

    const { comments } = this.props;

    return (
      <Fragment>
        {userId ? 
          <AddCommentForm projectId={this.props.projectId}/>
          : null
        }
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
    auth: state.auth
  }),
  null
)(Comments);