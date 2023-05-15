import React, { useState, useEffect } from 'react';
import * as signalR from '@microsoft/signalr';
import { Message } from '../Message';
import { Button, TextField } from '@mui/material';
import styles from "./MessageForm.module.css";
import Image from 'next/image';

interface MessageFormProps {
  roomId: string;
  setRoomId: React.Dispatch<React.SetStateAction<string>>;
  userName: string;
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  setUserCount: React.Dispatch<React.SetStateAction<number>>;
}

const MessageForm: React.FC<MessageFormProps> = ({ roomId, setRoomId, userName, setMessages, setUserCount }) => {
  const [text, setText] = useState('');
  const [connection, setConnection] = useState<signalR.HubConnection | null>(null);

  useEffect(() => {
    if (roomId) {
      const handleSystemMessage = (message: string) => {
        setMessages((prevMessages) => [...prevMessages, { user: 'System', text: message }]);
      };

      const handleMessage = (user: string, text: string) => {
        setMessages((prevMessages) => [...prevMessages, { user, text }]);
      };

      const handleUpdateUserCount = (userCount: number) => {
        setUserCount(userCount);
      };

      const newConnection = new signalR.HubConnectionBuilder()
        .withUrl('https://mchatapp.azurewebsites.net/chatHub')
        .withAutomaticReconnect()
        .build();

      newConnection.start()
        .then(async () => {
          console.log('Connection started');
          await newConnection.invoke('JoinRoom', roomId, userName);
        })
        .catch((err) => console.error('Error while starting connection: ' + err));

      newConnection.on('ReceiveSystemMessage', handleSystemMessage);
      newConnection.on('LeaveRoom', handleSystemMessage);
      newConnection.on('ReceiveMessage', handleMessage);
      newConnection.on('UpdateUserCount', handleUpdateUserCount);

      newConnection.onreconnecting((error) => {
        console.log("try to reconnect");
      });

      newConnection.onclose((error) => {
        console.log("lost the connection");
        setRoomId('');
      })

      setConnection(newConnection);

      return () => {
        if (newConnection && newConnection.state === signalR.HubConnectionState.Connected) {
          newConnection.invoke('LeaveRoom', roomId).then(() => {
            newConnection.stop()
              .then(() => {
                console.log('Connection stopped');
              })
              .catch((err) => console.error('Error while stopping connection: ' + err));
          });

        }
      };
    }
  }, [roomId, setMessages]);

  const handleMessageSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (connection) {
      try {
        await connection.invoke('SendMessage', roomId, userName, text);
        setText('');
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleLeaveRoomButton = async () => {
    if (connection && connection.state === signalR.HubConnectionState.Connected) {
      try {
        await connection.invoke('LeaveRoom', roomId, userName);
        await connection.stop()
        setMessages([])
        setRoomId('');
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
      <form className={styles.form} onSubmit={handleMessageSubmit}>

        <TextField
          id="outlined-basic"
          label="Message"
          variant="outlined"
          onChange={(event) => setText(event.target.value)}
          value={text}
          type="text" />

        <Button
          variant="outlined"
          type="submit"
          disabled={!userName || !text}>
          Send
        </Button>

        <Button
        variant="outlined"
        onClick={handleLeaveRoomButton}
        color='error'
        size='small'
        endIcon={
        <Image
          src="/exit.svg"
          alt="Logo"
          width={30}
          height={30}/>
      }
        >
        Leave the room
      </Button>
      </form>
  );
};



export default MessageForm;