import * as firebase from 'firebase/app';

import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCS3baW4nVuVk1sHL24ZliS7O_wLtu4Vs0',
  authDomain: 'todo-test-1d63f.firebaseapp.com',
  databaseURL: 'https://todo-test-1d63f.firebaseio.com',
  projectId: 'todo-test-1d63f',
  storageBucket: 'todo-test-1d63f.appspot.com',
  messagingSenderId: '624478568331',
  appId: '1:624478568331:web:9010ff13c997badf45398e',
  measurementId: 'G-VFLN1YK8PB',
};

firebase.initializeApp(firebaseConfig);
const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos")
