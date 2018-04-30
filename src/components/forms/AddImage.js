import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addImage } from './actions';
import { storage, db } from '../../services/firebase';

const completeImages = storage.ref('images');

class AddPhoto extends PureComponent {

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

    const { elements } = event.target;

    this.handleUpload(elements.image.files[0])
      .then(url => {
        this.props.onSubmit(url);
      });
  };

  handleUpload(file) {
    const uploadTask = completeImages.child(db.ref('temp').push().key).put(file);

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
          <label htmlFor="image"> Add Profile Picture:
          <input ref={(input) => { this.pictureInput = input; }} type="file" name="image" onChange={this.handleUpload} disabled={disable} required/>
          </label>

          <figure>
            <img className="preview" src={image}/>
          </figure>
        </div>

        <button className={'form-button'} type={'submit'}>Add</button>
      </form>
    );
  }
}

export default connect(
  () => ({}),
  { onSubmit: addImage }
)(AddPhoto);
