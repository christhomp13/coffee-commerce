import { getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyCQdmD4PcQ_1-l9aeKkiICmbUmrCNzJ0XE",
  authDomain: "coffee-commerce-b3287.firebaseapp.com",
  projectId: "coffee-commerce-b3287",
  storageBucket: "coffee-commerce-b3287.appspot.com",
  messagingSenderId: "444613446733",
  appId: "1:444613446733:web:6e40ea76b639bfd44d2004",
  measurementId: "G-RVECR7YX2B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
