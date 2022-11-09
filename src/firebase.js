import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdgihwVQv7qv1MBfx49l6PbDxXN6UmigI",
  authDomain: "webrtc-72286.firebaseapp.com",
  databaseURL: "https://webrtc-72286-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "webrtc-72286",
  storageBucket: "webrtc-72286.appspot.com",
  messagingSenderId: "1067533868523",
  appId: "1:1067533868523:web:8fe6b48a8ea81d3c7ccdae",
  measurementId: "G-NY5RWWHNC2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();