
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCMyeF24Q5Ok7C1g_K_GSuyR2Wd9rlAREY",
  authDomain: "webcarros-d5453.firebaseapp.com",
  projectId: "webcarros-d5453",
  storageBucket: "webcarros-d5453.firebasestorage.app",
  messagingSenderId: "774962774698",
  appId: "1:774962774698:web:85ec9a0182e0a1504106d3"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const auth = getAuth(app);
const storage = getStorage(app);

export {db, auth, storage};