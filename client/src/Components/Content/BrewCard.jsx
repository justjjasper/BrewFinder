import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default function BrewCard ( {brew} ) {

  return (
     <BrewCardContainer>
        <h2> {brew?.name} </h2>
     </BrewCardContainer>
  )
};

var BrewCardContainer = styled.div`
  border: 5px solid;
`;