import React from 'react';
import { useParams } from 'react-router-dom';
import Chat from './Chat';

function ChatRoom() {
    const { roomId } = useParams();

    return (
        <div>
            <h2>채팅방 {roomId}</h2>
            <Chat />
        </div>
    );
}

export default ChatRoom;
