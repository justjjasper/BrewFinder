import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import BrewCard from './BrewCard.jsx';

export default function Gallery ( {brews} ) {
  var length = brews.length;
  var [index, setIndex] = useState(8);

  var leftClick = (e) => {
    console.log('what is state', index)
    if (index !== 0) {
      setIndex(index-= 1)
    }
  };

  var rightClick = (e) => {
    if (index !== length-1) {
      setIndex(index+= 1);
    }
  }

  return (
    <GalleryContainer>

      <LeftButton
      className="fa-solid fa-angle-left"
      onClick={leftClick}/>
      <GalleryBox>

      <BrewCard brew = {brews[index]}/>

      </GalleryBox>
     <RightButton
     className="fa-solid fa-angle-right"
     onClick ={rightClick}/>

    </GalleryContainer>
  )
};

var GalleryContainer = styled.div`
  border: 2px solid;
  display: flex;
  flex-direction: row;
  align-content: center;
  margin-top: 30px;
`;

var GalleryBox = styled.div`

`;

var LeftButton = styled.i`
  font-size: 40px;
`;

var RightButton = styled.i`
  font-size: 40px;
`;