// "use client";

// import React, { useState, useEffect } from 'react';
// import * as signalR from '@microsoft/signalr';

// interface Message {
//   user: string;
//   text: string;
// }

// const ChatForm: React.FC = () => {
//   const [roomId, setRoomId] = useState('');
//   const [user, setUser] = useState('');
//   const [text, setText] = useState('');
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [connection, setConnection] = useState<signalR.HubConnection | null>(null);

//   const handleRoomSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     if (roomId) {
//       const newConnection = new signalR.HubConnectionBuilder()
//         .withUrl('https://localhost:7262/chatHub')
//         .withAutomaticReconnect()
//         .build();

//       setConnection(newConnection);
//     }
//   };

//   useEffect(() => {
//     const handleSystemMessage = (message: string) => {
//       setMessages((prevMessages) => [...prevMessages, { user: 'System', text: message }]);
//     };

//     if (connection) {
//       connection.start()
//         .then(async () => {
//           console.log('Connection started');
//           await connection.invoke('JoinRoom', roomId);
//         })
//         .catch((err) => console.error('Error while starting connection: ' + err));

//       connection.on('ReceiveSystemMessage', handleSystemMessage);
//       connection.on('ReceiveMessage', (user: string, text: string) => {
//         setMessages((prevMessages) => [...prevMessages, { user, text }]);
//       });

//       return () => {
//         connection.stop()
//           .then(async () => {
//             console.log('Connection stopped');
//             await connection.invoke('LeaveRoom', roomId);
//           })
//           .catch((err) => console.error('Error while stopping connection: ' + err));
//       };
//     }
//   }, [connection, roomId]);

//   const handleMessageSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     if (connection) {
//       try {
//         await connection.invoke('SendMessage', roomId, user, text);
//         setText('');
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   };

//   return (
//     <div>
//       {!connection && (
//         <form onSubmit={handleRoomSubmit}>
//           <label>
//             Enter room ID:
//             <input
//               type="text"
//               value={roomId}
//               onChange={(event) => setRoomId(event.target.value)}
//             />
//           </label>
//           <button type="submit" disabled={!roomId}>Submit</button>
//         </form>
//       )}
//       {connection && (
//         <div>
//           <label>
//             Your name:
//             <input
//               type="text"
//               value={user}
//               onChange={(event) => setUser(event.target.value)}
//             />
//           </label>
//           <form onSubmit={handleMessageSubmit}>
//             <label>
//               Message:
//               <input
//                 type="text"
//                 value={text}
//                 onChange={(event) => setText(event.target.value)}
//               />
//             </label>
//             <button type="submit" disabled={!user || !text}>Send</button>
//           </form>
//           <div>
//             {messages.map((message, index) => (
//               <div key={index}>
//                 <strong>{message.user}:</strong> {message.text}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatForm;