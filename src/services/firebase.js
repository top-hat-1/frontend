import firebase from 'firebase';

export const config = {
  apiKey: 'AIzaSyCnvoareUMtNtqVxLSOUz_QpIhZTZHN4pE',
  authDomain: 'tophat-images.firebaseapp.com',
  databaseURL: 'https://tophat-images.firebaseio.com',
  projectId: 'tophat-images',
  storageBucket: 'tophat-images.appspot.com',
  messagingSenderId: '655491788445'
};

const firebaseApp = firebase.initializeApp(config);

export const db = firebaseApp.database();
export const storage = firebase.storage();