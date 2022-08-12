import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function NoteForm ( {post}) {

  var [entry, setEntry] = useState('');
  var [photoURL, setPhotoURL] = useState([]);
  var handleSubmit = (e) => {
    e.preventDefault();
    post(entry)
  };

  var array = [];

  var widget = window.cloudinary.createUploadWidget({
    cloudName: 'dkzeszwgm',
    uploadPreset: 'presetFEC'
  }, (error, result) => {
    if (!error && result && result.event === 'success') {
      console.log('data', result.info.url)

      array.push(result.info.url);
      setPhotoURL(array)
      // setURLImage([...urlImage, result.info.url])
      console.log('what is photoURL', photoURL)
    }
  });


  var click = () => {
    widget.open()
  };


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
{/*
       <ImageContainer>
        {photoURL.map((each, i) => {
          return (
            <Images key={i} src={each}/>
          )
        })}
       </ImageContainer> */}

       {/* <ButtonContainers> */}
        <Button
        onClick ={handleSubmit}
        variant="contained"
        size="small">
          Post
        </Button>
       {/* </ButtonContainers> */}
        {/* <button onClick={click}> Upload </button> */}

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

var ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

var Images = styled.img`
  width: 100px;
  height: 100px;
`;

// var ButtonContainers = styled.div`
//   display: flex;
//   flex-direction: row;
// `;