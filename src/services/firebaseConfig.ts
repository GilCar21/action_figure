
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA8JT27R9kj5zrkE5F4xhY8Xee1eH9_iKQ",
  authDomain: "action-figures-9b1e3.firebaseapp.com",
  projectId: "action-figures-9b1e3",
  storageBucket: "action-figures-9b1e3.appspot.com",
  messagingSenderId: "717934838403",
  appId: "1:717934838403:web:89d67ec4dd795a9fe1d1b6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);