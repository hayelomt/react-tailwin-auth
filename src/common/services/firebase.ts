import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCvoCCDmEInZHYfEKscfB29lZbTjKAR6wU',
  authDomain: 'flut-d6e5d.firebaseapp.com',
  databaseURL: 'https://flut-d6e5d-default-rtdb.firebaseio.com',
  projectId: 'flut-d6e5d',
  storageBucket: 'flut-d6e5d.appspot.com',
  messagingSenderId: '740260874210',
  appId: '1:740260874210:web:5ce7736b1aa75139a21bbb',
};

initializeApp(firebaseConfig);

export const auth = getAuth();

export const firestore = getFirestore();
