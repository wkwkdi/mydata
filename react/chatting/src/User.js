// import { useState, useEffect } from 'react';
// import { getAuth, onAuthStateChanged } from '../firebase-config';
// import { auth } from '../firebase-config';

// function User() {
//     const [currentUser, setCurrentUser] = useState(null);

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 setCurrentUser(user);
//             } else {
//                 setCurrentUser(null);
//             }
//         });

//         return () => unsubscribe();
//     }, []);

//     return (
//         <div>
//             {currentUser ? (
//                 <div>
//                     <h1>Current User Information</h1>
//                     <p>User ID: {currentUser.uid}</p>
//                     <p>Email: {currentUser.email}</p>
//                     <p>Display Name: {currentUser.displayName}</p>
//                 </div>
//             ) : (
//                 <div>
//                     <h1>No user is currently logged in.</h1>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default User;
