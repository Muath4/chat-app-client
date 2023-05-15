"use client";

import React, { useState } from 'react';
import JoinRoomForm from '../JoinRoomForm/JoinRoomForm';
import MessageForm from '../MessageForm/MessageForm';
import MessageList from '../MessageList/MessageList';
import { Message } from '../Message';
import styles  from "./ChatForm.module.css";



const ChatForm: React.FC = () => {
  const [roomId, setRoomId] = useState('');
  const [user, setUser] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [userCount, setUserCount] = useState(0);

  return (
    <div className= {styles.mainChat}>

      {!roomId && <JoinRoomForm setRoomId={setRoomId} setUser={setUser} userName={user} />}

      {roomId && (
        <div>
          <h4 className={styles.userCount}>User count in this room: {userCount}</h4>
          <MessageList messages={messages} />

          <MessageForm roomId={roomId} setRoomId={setRoomId} userName={user} setMessages={setMessages} setUserCount={setUserCount} />
        </div>
      )}
    </div>
  );
};

export default ChatForm;