import firebase from 'firebase';
import config from '../config';

const firebaseApp = firebase.initializeApp(config.firebase);
const db = firebaseApp.database();
const storage = firebaseApp.storage();

export { db, storage };
