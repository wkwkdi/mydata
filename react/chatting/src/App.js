import Chat from './components/Chat';
import SignIn from './components/SignIn';
import { auth } from './firebase-config.js'
import { useAuthState } from 'react-firebase-hooks/auth'
import './App.css';
import Profile from './components/Profile.js';



function App() {
    const [user] = useAuthState(auth)
    return (
        <>
          {user ? (
              <>
                <Chat />
                <Profile />
              </>
            ) : (
                <SignIn />
              )}
            </>
          );
        }
        export default App; 



// import React, { useState } from 'react';
// import { auth } from './firebase-config';
// import ChatList from './components/ChatList';
// import Chat from './components/Chat';
// import SignIn from './components/SignIn';
// import { useAuthState } from 'react-firebase-hooks/auth';


// function App() {
//     const [user] = useAuthState(auth);
//     const [currentChat, setCurrentChat] = useState(null);

//     return (
//         <>
//             {user ? (
//                 <>
//                     <button onClick={() => auth.signOut()}>Sign Out</button>
//                     <ChatList setCurrentChat={setCurrentChat} />
//                     {currentChat && <Chat currentChat={currentChat} />}
//                 </>
//             ) : (
//                 <SignIn />
//             )}
//         </>
//     );
// }

// export default App;

        
        



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ChatList from './components/ChatList'
// import ChatRoom from './components/ChatRoom';

// function App() {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<ChatList />} />
//                 <Route path="/chat/:roomId" element={<ChatRoom />} />
//             </Routes>
//         </Router>
//     );
// }

// export default App;

