import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// TODO: Add route for `/projects/${projId}/${_id}` in App, check for user and give option of commenting;
// TODO: check if this is the current user's project, give option of deleting, adding, or editing moments -- call a component that opens the moment in a form and has a remove button. 


class Moment extends Component {

  render() {

    const { projectId, _id, caption, photoUrl, category } = this.props;

    return (
      <li className="moment-li">
        <div className="image-wrap">
          <Link to={`/projects/${projectId}/moments/${_id}`}><img src={photoUrl}/></Link>
        </div>
        <div className="moment-details">
        <Link to={`/projects/${projectId}/moments/${_id}`}><p>{caption}</p></Link>
        <small>{category}</small>
        </div>
      </li>
    );
  }
}

export default connect(
  state => ({
    user: state.user,
  }),
  null
)(Moment);