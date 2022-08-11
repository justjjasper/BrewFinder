import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function NoteForm ( {post}) {

  var [entry, setEntry] = useState('');

  var handleSubmit = (e) => {
    e.preventDefault();
    post(entry)
  }

  return (
    <NoteFormContainer>
      <Header> Add A Note </Header>
      <InputContainer>
      <TextField
      onChange = {e => setEntry(e.target.value)}
      value={entry}
      id="standard-basic"
       label="Type here..."
       variant="standard" />
        <Button
        onClick ={handleSubmit}
        variant="contained"
        size="small">
          Post
        </Button>
      </InputContainer>
    </NoteFormContainer>
  );
};

var NoteFormContainer = styled.div`
  border: 2px solid;
  height: 400px;
  width: 400px;
`;

var Header = styled.span`
  font-weight: bold;
  font-size: 25px;
  position: relative;
  left: 140
`;

var InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-around;
`;

