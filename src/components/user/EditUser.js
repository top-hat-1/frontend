import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addAvi, updateUser } from '../forms/actions';
import { storage, db } from '../../services/firebase';
import apiFunctions from '../../services/projectsApi';
import { withRouter } from 'react-router-dom';

const avis = storage.ref('profile-pics');

class EditUser extends PureComponent {

  state = {
    image: '',
    error: null,
    disable: false
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.handleToggle();

    const { target: { elements } } = event;
    const { hobbies } = elements;

    const { state, history } = this.props;
    const id = state.auth._id;

    this.handleUpload(elements.image.files[0])
      .then(url => {
        apiFunctions.updateuser(url, hobbies.value, id);
      })
      .then(() => apiFunctions.loaduser(id))
      .then(() => history.push(`/user/${id}/projects`));
  };

  handleUpload(file) {
    if(file.name){
      const uploadTask = avis.child(db.ref('temp').push().key).put(file);
      
      return new Promise((resolve, reject) => {
        uploadTask.on('state_changed', () => {   
        },
        reject,
        () => {
          const downloadUrl = uploadTask.snapshot.downloadURL;
          resolve(downloadUrl);
        });
      });
    }
  }

  handleToggle = () => {
    this.setState(prev => ({
      share: !prev.share
    }));
  };

  render() {
    const { image, disable } = this.state;

    return (

      <form className="user-form" onSubmit={this.handleSubmit}>
 
        <div className="picture-add">
          <label htmlFor="image"> Add Photo:
            <div className="choose-file">
              <input ref={(input) => { this.pictureInput = input; }} type="file" name="image" onChange={this.handleUpload} disabled={disable} required/>
            </div>
          </label>

          <figure>
            <img className="preview" src={image}/>
          </figure>

          <label htmlFor="hobbies"> What do you like to do?  
            <input name="hobbies"/>
          </label>
        </div>

        <button className={'form-button'} type={'submit'}>Add Image</button>
      </form>
    );
  }
}

export default withRouter(connect(
  (state) => ({ state: state }),
  { onSubmit: addAvi, updateUser: updateUser }
)(EditUser));
