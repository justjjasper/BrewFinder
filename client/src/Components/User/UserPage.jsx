import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import BrewGrid from './BrewGrid.jsx';

export default function UserPage ( {username, favorites} ) {
  console.log('show me faves from userPage', favorites);
  return (
    <PageContainer>
      <BrewGrid username={username} favorites= {favorites} />
     </PageContainer>

  );
};

var PageContainer = styled.div`
  display: flex;
  justify-content: center;
`;
