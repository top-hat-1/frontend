import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Moment extends Component {

  render() {

    const { projId, _id, caption, photoUrl, category } = this.props;

    return (
      <li className="moment-li">
        <div className="image-wrap">
          <Link to={`/projects/${projId}/moments/${_id}`}><img src={photoUrl}/></Link>
        </div>
        <div className="moment-details">
        <Link to={`/projects/${projId}/moments/${_id}`}><p>{caption}</p></Link>
        <small>{category}</small>
        </div>
      </li>
    )
  }
}

// TODO: Add route for `/projects/${projId}/moments/${_id}` in App
// conditional to check for user and give option of commenting
// check if this is the current user's project, give option of deleting, adding, or editing moments -- call a component that opens the moment in a form and has a remove button. 

export default connect(
  state => ({
    user: state.user,
  }),
  null
)(Moment);