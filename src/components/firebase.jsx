
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyClMpF3DcDg6BLbs8CHz4fddW70CYn7mLs",
  authDomain: "form-verification-9dd46.firebaseapp.com",
  projectId: "form-verification-9dd46",
  storageBucket: "form-verification-9dd46.firebasestorage.app",
  messagingSenderId: "433572235602",
  appId: "1:433572235602:web:a9d0ea8b2136705c40928b",
  measurementId: "G-4MEK8H88ZD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)

