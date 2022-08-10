import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default function FaveBrewCard ( {favorite} ) {
  return (
    <BrewCardContainer>
    <div> {favorite.name} </div>
    </BrewCardContainer>
  )
};

var BrewCardContainer = styled.div`
  border: 2px solid;
  height: 300px;
  width: 300px;
  margin: 10px;
`;

