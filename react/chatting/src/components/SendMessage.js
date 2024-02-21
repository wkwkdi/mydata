import React, { useState } from 'react'
import { db, auth } from '../firebase-config'
import { collection, addDoc, serverTimestamp} from "firebase/firestore";
import './Chat.css';

function SendMessage() {
    const [msg, setMsg] = useState('')
    const messagesRef = collection(db, "messages");
  
       const sendMsg = async (e) => {
        const { uid } = auth.currentUser
        
        await addDoc(messagesRef, {
            text: msg,
            createdAt: serverTimestamp(),
            uid: uid,
        })
        setMsg('');
      };
    return (
          <div> 
               <input placeholder='Message...' 
                 type="text" value={msg} 
                 onChange={(e) => setMsg(e.target.value)}
              />
              <button className='send-button' onClick={sendMsg}>Send</button>
        </div>
    )
}
export default SendMessage

