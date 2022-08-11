import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import NoteModal from './NoteModal.jsx';

// useEffect to get all of the notes
export default function FaveBrewCard ( {username, favorite} ) {

  var [toggleNoteModal, setToggleNoteModal] = useState(false);

  return (
    <BrewCardContainer>
    <BrewImg
    onClick = {() => setToggleNoteModal(true)}
    src='https://cdn.theculturetrip.com/wp-content/uploads/2016/09/main-bar-at-tir-na-nog.jpg'/>
    <DivSpan></DivSpan>
    <BrewName>  {favorite.name}  </BrewName>
    {toggleNoteModal &&
    <NoteModal
      username={username}
      toggle={setToggleNoteModal}
      brew={favorite}/>}
    </BrewCardContainer>
  )
};

var BrewCardContainer = styled.div`
  border: 2px solid;
  height: 300px;
  width: 300px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 0.4rem 1.5rem rgb(0 0 0 / 25%);
  text-overflow: ellipsis;
  flex-wrap: wrap;
  overflow: hidden;
`;

var BrewImg = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  position: relative;
  left: 20;
  padding: 10px;
  :hover {
    cursor: pointer;
  };
`;

var BrewName = styled.div`
  font-weight: bold;
  font-size: 20px;
  position: relative;
  left: 65
`;

var DivSpan = styled.div`
  border-bottom: 1px solid;
`;