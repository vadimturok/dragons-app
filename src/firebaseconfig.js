import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBLcE5_VaMzPZ9Y2yCEzRYt7-nugvdPAqs",
    authDomain: "dragonsapp-85c4d.firebaseapp.com",
    projectId: "dragonsapp-85c4d",
    storageBucket: "dragonsapp-85c4d.appspot.com",
    messagingSenderId: "713406070939",
    appId: "1:713406070939:web:8724252f80bead0e80c63e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore = getFirestore(app)

export {auth, firestore}