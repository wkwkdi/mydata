// UserList.js
// import React, { useState, useEffect } from 'react';
// import { db } from '../firebase-config';

// function ChatList() {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         const unsubscribe = db.collection('users').onSnapshot(snapshot => {
//             const usersData = [];
//             snapshot.forEach(doc => {
//                 const userData = doc.data();
//                 usersData.push({ id: doc.id, ...userData });
//             });
//             setUsers(usersData);
//         });

//         return () => unsubscribe();
//     }, []);

//     return (
//         <div>
//             <h2>User List</h2>
//             <ul>
//                 {CurrentUsers.map(user => (
//                     <li key={current.id}>{current.displayName}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default ChatList;
