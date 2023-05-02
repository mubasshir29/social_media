// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV6doDJXnaPjDxg-KWeWbWJ8QzeqWgVwA",
  authDomain: "kitchenkreation-459d8.firebaseapp.com",
  projectId: "kitchenkreation-459d8",
  storageBucket: "kitchenkreation-459d8.appspot.com",
  messagingSenderId: "555885302610",
  appId: "1:555885302610:web:c92b124abf9deeb88d608b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage, app };