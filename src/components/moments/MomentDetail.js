import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { momentLoad } from './actions';

class MomentDetail extends Component {

  componentWillMount() {
    this.props.momentLoad(this.props.id);
  }

  render() {

    const { photoUrl, category, caption } = this.props.moment;
    const { name, owner, projectName, _id } = this.props.project;

    return (
      <div>
        <Link to={`/projects/${_id}`}><h3>{projectName}</h3></Link>
        <Link to={`/user/${owner}/projects`}><h4>By {name}</h4></Link>
        <div className="image-wrap"> 
          <img src={photoUrl}></img>
        </div>
        <div className="moment-details">
          <small>{category}</small>
          <p className="moment-caption">{caption}</p>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    owner: state.owner,
    moment: state.moment,
    project: state.project,
  }),
  { momentLoad }
)(MomentDetail);