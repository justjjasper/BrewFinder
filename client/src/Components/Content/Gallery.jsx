import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import BrewCard from './BrewCard.jsx';

export default function Gallery ( {addToFaves, brews, index, setIndex} ) {
  var length = brews.length;

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
  };

  return (
    <GalleryContainer>

     <LeftButton
      className="fa-solid fa-angle-left"
      onClick={leftClick}/>
      <GalleryBox>

      <BrewCard addToFaves={addToFaves} brew={brews[index]}/>

      </GalleryBox>
     <RightButton
     className="fa-solid fa-angle-right"
     onClick ={rightClick}/>

    </GalleryContainer>
  )
};

var GalleryContainer = styled.div`
  // border: 2px solid;
  display: flex;
  flex-direction: row;
  align-content: space-between;
  margin: 30px 70px 0;
`;

var GalleryBox = styled.div`

`;

var LeftButton = styled.i`
  font-size: 40px;
  position: relative;
  top: 170px;
  padding-right: 10px;
`;

var RightButton = styled.i`
  font-size: 40px;
  position: relative;
  top: 170px;
  padding-left: 10px;
`;