import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVkmEaMir5AhLuVW_-0hMnVUEC0-lEN-U",
  authDomain: "reactjs-coderhouse-93e08.firebaseapp.com",
  projectId: "reactjs-coderhouse-93e08",
  storageBucket: "reactjs-coderhouse-93e08.appspot.com",
  messagingSenderId: "1001766861833",
  appId: "1:1001766861833:web:2c87cb8794700a95668cd8",
  measurementId: "G-WSNVQ29NVG"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore (app);

export default db;