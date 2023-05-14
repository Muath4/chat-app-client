import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import styles  from "./JoinRoomForm.module.css";

interface JoinRoomFormProps {
  setRoomId: (roomId: string) => void;
  setUser: (userName: string) => void;
  userName: string;
}

function isNumber(value?: string | number): boolean
{
   return ((value != null) &&
           !isNaN(Number(value.toString())));
}
const JoinRoomForm: React.FC<JoinRoomFormProps> = ({ setRoomId, setUser, userName }) => {
  const [inputRoomId, setInputRoomId] = useState('');

  const handleRoomSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setRoomId(inputRoomId);
  };


  return (
    <form className={styles.form} onSubmit={handleRoomSubmit}>
      <TextField
        id="outlined-basic"
        label="enter your name"
        variant="outlined"
        onChange={(event) => setUser(event.target.value)}
        value={userName}
        type="text" />
      <TextField
        id="outlined-basic"
        label="Enter room ID"
        variant="outlined"
        onChange={(event) => {
          if(isNumber(event.target.value))
            setInputRoomId(event.target.value)
        }}
        value={inputRoomId}
        type="text" inputMode="numeric" />
      <Button
        variant="outlined"
        type="submit"
        disabled={!userName || !inputRoomId}>
        Submit
      </Button>
    </form>
  );
};

export default JoinRoomForm;