import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import NoteForm from './NoteForm.jsx';
import Button from '@mui/material/Button';

export default function NoteModal ( {username, toggle, brew} ) {
  console.log('what is brew from notemodal', brew)

  var post = async (query) => {
    brew.note = query
    var results = axios.post('/brewery/postnote', brew)
    try{console.log('success in posting note')}
    catch(err){console.log('err in posting note from front')}
  };

  return (
    <ModalContainer>
      <ModalContent>
          <Header> {brew.name} </Header>
          <CloseButton
           className="fa-solid fa-xmark"
           onClick= {() => toggle(false)}/>
          <ContentContainer>

            <NotesContainer>

            </NotesContainer>
            <NoteForm post={post} />

          </ContentContainer>
      </ModalContent>
    </ModalContainer>
  )
};

var ModalContainer = styled.div`
  display: flex;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`;

var ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fefefe;
  margin: 2% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 800px;
  height: 550px;
  justify-content: space-between;
  position: relative;
  border-radius: 10px;
  box-shadow: 0px 0.4rem 1.5rem rgb(0 0 0 / 25%);
`;

var Header = styled.div`
  font-size: 30px;
  font-weight: bold;
  position: relative;
  left: 280;
`;

var CloseButton = styled.i`
  font-size: 30px;
  position: relative;
  left: 750;
  top: -70;
  :hover {
    cursor: pointer;
    color: #1976d2;
  }
`;


var ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

var NotesContainer = styled.div`
  border: 2px solid;
  height: 400px;
  width: 400px;
`;