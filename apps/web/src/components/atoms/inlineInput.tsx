import { Box, Typography, Avatar } from '@mui/material';
import { SystemStyleObject, Theme } from '@mui/system';
import { useState } from 'react';

//import { IContact } from 'react-coding-interview-shared/models';

export const InlineInput = ({email}: {email: string} ) => {
  const [ isEditing, setIsEditing ] = useState(false);

  return (
    <>
    {isEditing && (
      <p onClick={() => setIsEditing(!isEditing)}>Click to enter a value</p>
    )}
    {!isEditing && (
      <form action="">
        <input value={email}></input>
        <button>Update</button>
        <button onClick={() => setIsEditing(!isEditing)}>Cancel</button>
      </form>
    )}
    </>
  );
};
