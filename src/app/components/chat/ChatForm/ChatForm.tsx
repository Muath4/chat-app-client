"use client";

import React, { useState } from 'react';
import JoinRoomForm from '../JoinRoomForm/JoinRoomForm';
import MessageForm from '../MessageForm/MessageForm';
import MessageList from '../MessageList/MessageList';
import { Message } from '../Message';
import styles from "./ChatForm.module.css";
import { CircularProgress } from '@mui/material';



const ChatForm: React.FC = () => {
  const [roomId, setRoomId] = useState('');
  const [user, setUser] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [userCount, setUserCount] = useState(0);
  const [loading, setLoading] = useState(false);

  return (


    <>
      {loading ? <CircularProgress /> : <div className={styles.mainChat}>


        {!roomId && <JoinRoomForm setRoomId={setRoomId} setUser={setUser} userName={user} setLoading={setLoading} />}

      </div>}

      {roomId && (
        <>
          {!loading && <> <h4 className={styles.userCount}>User count in this room: {userCount}</h4>
            <MessageList messages={messages} /></>}

          <MessageForm roomId={roomId} setRoomId={setRoomId} userName={user} setMessages={setMessages} setUserCount={setUserCount} setLoading={setLoading} loading={loading} />
        </>
      )}

    </>
  );
};

export default ChatForm;