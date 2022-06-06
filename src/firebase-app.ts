// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBlrp40ye71InEZjdyhgi1O0UmDc85OOjM',
  authDomain: 'w4sted4nilist.firebaseapp.com',
  databaseURL: 'https://w4sted4nilist-default-rtdb.firebaseio.com',
  projectId: 'w4sted4nilist',
  storageBucket: 'w4sted4nilist.appspot.com',
  messagingSenderId: '651968768320',
  appId: '1:651968768320:web:c6e2faa7df77a0fab3b2a5',
  measurementId: 'G-JEGWYE94YV',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
