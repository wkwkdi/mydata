import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDwwq4si_CXaCcmuG2v0rbcfz6zXu327fs",
    authDomain: "chat-95e0f.firebaseapp.com",
    projectId: "chat-95e0f",
    storageBucket: "chat-95e0f.appspot.com",
    messagingSenderId: "583378842189",
    appId: "1:583378842189:web:fe28fdd7677d56b8046204",
    measurementId: "G-NN7TD731VJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export {db, auth, provider};