import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseApp = initializeApp({ 
    apiKey: "AIzaSyDwwq4si_CXaCcmuG2v0rbcfz6zXu327fs",
    authDomain: "chat-95e0f.firebaseapp.com",
    projectId: "chat-95e0f",
    storageBucket: "chat-95e0f.appspot.com",
    messagingSenderId: "583378842189",
    appId: "1:583378842189:web:fe28fdd7677d56b8046204",
    measurementId: "G-NN7TD731VJ"

 });
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

function Profile({ email, password, displayName }) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // 사용자 등록 성공
            var user = userCredential.user;

            // Firestore에 사용자 정보 저장
            setDoc(doc(db, 'users', user.uid), {
                displayName: displayName,
                email: user.email,
                uid: user.uid
            })
            .then(() => {
                console.log('User successfully written!');
            })
            .catch((error) => {
                console.error('Error writing user: ', error);
            });
        })
        .catch((error) => {
            // 사용자 등록 실패
            console.error('Error signing up: ', error);
        });
    return (
        <div>
            {auth.currentUser ? (
                <div>
                    <p>사용자 이름: {auth.currentUser.displayName}</p>
                </div>
            ) : (
                <p>로그인이 필요합니다.</p>
                )}
        </div>
    );
}

export default Profile;

