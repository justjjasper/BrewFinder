import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import FaveBrewCard from './FaveBrewCard.jsx';

export default function BrewGrid ( {username, favorites} ) {
  return (
    <BrewGridContainer>
      <BrewBody>
      <Header> Saved Breweries </Header>
      <BrewBox> {favorites.map((each, i) => {
        return (
          <FaveBrewCard key={i} username={username} favorite ={each} />
        )
      })}</BrewBox>
      </BrewBody>
    </BrewGridContainer>
  )
};

var BrewGridContainer = styled.div`
  display: flex;
  height: 800px;
  flex-direction: column;
  justify-content: center;
  width: 800px;
  border: 2px solid;

`;

var Header = styled.h2`
  position: relative;
  left: 250
`;

var BrewBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

var BrewBody = styled.div`
  position: relative;
  left: 90;
`;