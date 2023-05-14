import React from 'react';
import styles  from "./MessageList.module.css";
import { useEffect, useRef } from 'react';


interface Message {
  user: string;
  text: string;
}

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  const lastMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className={styles.messageListBox}>
      {messages.map((message, index) => (
        <div
          key={index}
          className={styles.message}
          ref={index === messages.length - 1 ? lastMessageRef : null}
        >
          <strong>{message.user}:</strong> {message.text}
        </div>
      ))}
    </div>
  );
};

export default MessageList;