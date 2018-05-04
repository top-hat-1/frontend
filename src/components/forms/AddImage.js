import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addImage } from './actions';
import { storage, db } from '../../services/firebase';

const completeImages = storage.ref('images');

// TODO: add conditional to check where we are and change the label on line 65 -- add profile, add cover, add photo

class AddImage extends PureComponent {

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
    if(file.name){
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
  }

  handleToggle = () => {
    this.setState(prev => ({
      share: !prev.share
    }));
  };

  render() {
    // const { image, disable } = this.state;

    return (

      <form className="user-form" onSubmit={this.handleSubmit}>
 
        <div className="picture-add">
          <input className="image-input"
            ref={(input) => { this.pictureInput = input; }} 
            type="file" 
            name="image"  
            style={{ display: 'none' }}/>
          <input className="upload-button" type="button" value="Add Photo" onClick={() => this.pictureInput.click()}/>

          {/* <figure>
            <img className="preview" src={image}/>
          </figure> */}
        </div>

        <button className={'form-button'} type={'submit'}>Confirm Image</button>
      </form>
    );
  }
}

export default connect(
  () => ({}),
  { onSubmit: addImage }
)(AddImage);
