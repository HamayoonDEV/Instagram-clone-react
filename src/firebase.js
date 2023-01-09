import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyDpdcrViC9FwNLDLXWQCWG1SBkpRhLZXHE",
    authDomain: "instagram-clone-react-aa8a0.firebaseapp.com",
    projectId: "instagram-clone-react-aa8a0",
    storageBucket: "instagram-clone-react-aa8a0.appspot.com",
    messagingSenderId: "607432041625",
    appId: "1:607432041625:web:fcab4af35e7f952890c408"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;