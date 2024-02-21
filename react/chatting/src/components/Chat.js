
//채팅 기본 버전

// import React, { useState, useEffect } from 'react';
// import { db, auth } from '../firebase-config';
// import SendMessage from './SendMessage';
// import { collection, query, orderBy, onSnapshot, doc, setDoc, serverTimestamp } from "firebase/firestore";
// import './Chat.css';

// function Chat() {
//     const [messages, setMessages] = useState([]);
//     const currentUser = auth.currentUser;

//     useEffect(() => {
//         const unsubscribe = onSnapshot(query(collection(db, "messages"), orderBy("createdAt", "asc")), (snapshot) => {
//             const messageList = snapshot.docs.map(doc => ({
//                 id: doc.id,
//                 ...doc.data(),
//                 readBy: doc.data().readBy || []
//             }));
//             setMessages(messageList);
//         });

//         return () => unsubscribe();
//     }, []);

//     useEffect(() => {
//         if (currentUser) {
//             messages.forEach(async (message) => {
//                 if (message.uid !== currentUser.uid && !message.readBy.includes(currentUser.uid)) {
//                     await markAsRead(message.id);
//                 }
//             });
//         }
//     }, [messages, currentUser]);

//     const markAsRead = async (messageId) => {
//         try {
//             const messageRef = doc(db, "messages", messageId);
//             await setDoc(messageRef, { readBy: [...messages.find(message => message.id === messageId).readBy, currentUser.uid] }, { merge: true });
//         } catch (error) {
//             console.error("Error updating document: ", error);
//         }
//     };

//     const formatTime = (timestamp) => {
//         if (timestamp && timestamp.seconds) {
//             const date = new Date(timestamp.seconds * 1000);
//             return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//         } else {
//             return '';
//         }
//     };

//     const handleSignOut = () => {
//         auth.signOut();
//     };

//     return (
//         <>
//             <button onClick={handleSignOut}>Sign Out</button>
//             <div className='container'>
//                 <div className="messages">
//                     {messages.map((message) => (
//                         <div
//                             key={message.id}
//                             className={`msg ${message.uid === currentUser.uid ? 'sent' : 'received'}`}
//                         >
//                             <div className="messageContainer">
//                                 <p>{message.text}</p>
//                                 <div className="messageInfo">
//                                     <span>{formatTime(message.createdAt)}</span>
//                                     {message.readBy && message.readBy.includes(currentUser.uid) && <span>Read</span>}
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <SendMessage />
//         </>
//     );
// }

// export default Chat;


//사용자 uid 목록 불러오는 버전
// import React, { useState, useEffect } from 'react';
// import { db, auth } from '../firebase-config';
// import SendMessage from './SendMessage';
// import { collection, query, orderBy, onSnapshot, Timestamp, doc, setDoc } from "firebase/firestore";
// import './Chat.css';

// function Chat() {
//     const [messages, setMessages] = useState([]);
//     const currentUser = auth.currentUser;

//     useEffect(() => {
//         const unsubscribe = onSnapshot(query(collection(db, "messages"), orderBy("createdAt", "asc")), (snapshot) => {
//             const messageList = snapshot.docs.map(doc => ({
//                 id: doc.id,
//                 ...doc.data(),
//                 readBy: doc.data().readBy || []
//             }));
//             setMessages(messageList);
//         });

//         return () => unsubscribe();
//     }, []);

//     useEffect(() => {
//         if (currentUser) {
//             messages.forEach(async (message) => {
//                 if (message.uid !== currentUser.uid && !message.readBy.includes(currentUser.uid)) {
//                     await markAsRead(message.id);
//                 }
//             });
//         }
//     }, [messages, currentUser]);

//     const markAsRead = async (messageId) => {
//         try {
//             const messageRef = doc(db, "messages", messageId);
//             await setDoc(messageRef, { readBy: [...messages.find(message => message.id === messageId).readBy, currentUser.uid] }, { merge: true });
//         } catch (error) {
//             console.error("Error updating document: ", error);
//         }
//     };

//     const formatTime = (timestamp) => {
//         if (timestamp && timestamp.seconds) {
//             const date = new Date(timestamp.seconds * 1000);
//             return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//         } else {
//             return '';
//         }
//     };

//     const handleSignOut = () => {
//         auth.signOut();
//     };

//     return (
//         <div className="chat-container">
//             <button onClick={handleSignOut}>Sign Out</button>
//             <div className='container'>
//                 <div className="messages">
//                     {currentUser && ( // 현재 사용자가 있을 때만 실행
//                         messages.map((message) => (
//                             <div
//                                 key={message.id}
//                                 className={`msg ${message.uid === currentUser.uid ? 'sent' : 'received'}`}
//                             >
//                                 <div className="messageContainer">
//                                     <p>{message.text}</p>
//                                     <div className="messageInfo">
//                                         <span>{formatTime(message.createdAt)}</span>
//                                         {message.readBy && message.readBy.includes(currentUser.uid) && <span>읽음</span>}
//                                     </div>
//                                 </div>
//                             </div>
//                         ))
//                     )}
//                 </div>
//             </div>
//             <SendMessage />
//         </div>
//     );
// }

// export default Chat;


//로그인 사용자 storage에 저장버전
// import React, { useState, useEffect } from 'react';
// import { db, auth } from '../firebase-config';
// import SendMessage from './SendMessage';
// import { collection, query, orderBy, onSnapshot, doc, setDoc, Timestamp } from "firebase/firestore";
// import './Chat.css';

// function Chat() {
//     const [messages, setMessages] = useState([]);
//     const currentUser = auth.currentUser;

//     useEffect(() => {
//         const unsubscribe = onSnapshot(query(collection(db, "messages"), orderBy("createdAt", "asc")), (snapshot) => {
//             const messageList = snapshot.docs.map(doc => ({
//                 id: doc.id,
//                 ...doc.data(),
//                 readBy: doc.data().readBy || []
//             }));
//             setMessages(messageList);
//         });

//         return () => unsubscribe();
//     }, []);

//     useEffect(() => {
//         if (currentUser) {
//             messages.forEach(async (message) => {
//                 if (message.uid !== currentUser.uid && !message.readBy.includes(currentUser.uid)) {
//                     await markAsRead(message.id);
//                 }
//             });
//         }
//     }, [messages, currentUser]);

//     useEffect(() => {
//         if (currentUser) {
//             const userRef = doc(db, 'users', currentUser.uid);
//             setDoc(userRef, {
//                 displayName: currentUser.displayName,
//                 email: currentUser.email,
//                 uid: currentUser.uid
//             }, { merge: true });
//         }
//     }, [currentUser]);

//     const markAsRead = async (messageId) => {
//         try {
//             const messageRef = doc(db, "messages", messageId);
//             await setDoc(messageRef, { readBy: [...messages.find(message => message.id === messageId).readBy, currentUser.uid] }, { merge: true });
//         } catch (error) {
//             console.error("Error updating document: ", error);
//         }
//     };

//     const formatTime = (timestamp) => {
//         if (timestamp && timestamp.seconds) {
//             const date = new Date(timestamp.seconds * 1000);
//             return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//         } else {
//             return '';
//         }
//     };

//     const handleSignOut = () => {
//         auth.signOut();
//     };

//     return (
//         <div className="chat-container">
//             <button onClick={handleSignOut}>Sign Out</button>
//             <div className='container'>
//                 <div className="messages">
//                     {currentUser && ( // 현재 사용자가 있을 때만 실행
//                         messages.map((message) => (
//                             <div
//                                 key={message.id}
//                                 className={`msg ${message.uid === currentUser.uid ? 'sent' : 'received'}`}
//                             >
//                                 <div className="messageContainer">
//                                     <p>{message.text}</p>
//                                     <div className="messageInfo">
//                                         <span>{formatTime(message.createdAt)}</span>
//                                         {message.readBy && message.readBy.includes(currentUser.uid) && <span>읽음</span>}
//                                     </div>
//                                 </div>
//                             </div>
//                         ))
//                     )}
//                 </div>
//             </div>
//             <SendMessage />
//         </div>
//     );
// }

// export default Chat;


//인증이 없는 방식
// import React, { useState, useEffect } from 'react';
// import { db } from '../firebase-config';
// import { collection, query, orderBy, onSnapshot, addDoc } from "firebase/firestore";
// import './Chat.css';

// function Chat() {
//     const [messages, setMessages] = useState([]);
//     const [message, setMessage] = useState('');

//     useEffect(() => {
//         const unsubscribe = onSnapshot(query(collection(db, "messages"), orderBy("createdAt", "asc")), (snapshot) => {
//             const messageList = snapshot.docs.map(doc => ({
//                 id: doc.id,
//                 ...doc.data(),
//                 readBy: doc.data().readBy || []
//             }));
//             setMessages(messageList);
//         });

//         return () => unsubscribe();
//     }, []);

//     const sendMessage = async (event) => {
//         event.preventDefault();
//         const messageCollection = collection(db, "messages");

//         if (message) {
//             await addDoc(messageCollection, {
//                 text: message,
//                 createdAt: new Date(),
//                 readBy: []
//             });
            
//             setMessage('');
//         }
//     };

//     return (
//         <div className="chat-container">
//             <div className='container'>
//                 <div className="messages">
//                     {messages.map((message) => (
//                         <div
//                             key={message.id}
//                             className={`msg`}
//                         >
//                             <div className="messageContainer">
//                                 <p>{message.text}</p>
//                                 <div className="messageInfo">
//                                     <span>{new Date(message.createdAt.seconds * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <form onSubmit={sendMessage}>
//                 <input
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                     placeholder="메시지를 입력하세요"
//                 />
//                 <button type="submit">보내기</button>
//             </form>
//         </div>
//     );
// }

// export default Chat;

import React, { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { collection, query, orderBy, onSnapshot, addDoc, doc, getDoc } from "firebase/firestore";
import './Chat.css';

function Chat({ currentUser, otherUser }) {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const chatId = currentUser && otherUser ? [currentUser.id, otherUser.id].sort().join('-') : null;



    useEffect(() => {
        const unsubscribe = onSnapshot(query(collection(doc(db, "chats", chatId), "messages"), orderBy("createdAt", "asc")), (snapshot) => {
            const messageList = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setMessages(messageList);
        });

        return () => unsubscribe();
    }, [chatId]);

    const sendMessage = async (event) => {
        event.preventDefault();
        const messageCollection = collection(doc(db, "chats", chatId), "messages");

        if (message) {
            await addDoc(messageCollection, {
                text: message,
                createdAt: new Date(),
                senderId: currentUser.id,
            });
            
            setMessage('');
        }
    };

    return (
        <div className="chat-container">
            <div className='container'>
                <div className="messages">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`msg ${message.senderId === currentUser.id ? 'sent' : 'received'}`}
                        >
                            <div className="messageContainer">
                                <p>{message.text}</p>
                                <div className="messageInfo">
                                    <span>{new Date(message.createdAt.seconds * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <form onSubmit={sendMessage}>
                <input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="메시지를 입력하세요"
                />
                <button type="submit">보내기</button>
            </form>
        </div>
    );
}

export default Chat;

