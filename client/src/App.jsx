import React, { useState, useEffect } from 'react';
import LogInForm from './Components/LogInForm.jsx';
import styled from 'styled-components';
import Button from '@mui/material/Button';

export default function App () {
  var [logIn, setLogIn] = useState(true);

  return (
    <AppContainer>
      {logIn && <LogInForm toggleLogIn={setLogIn}/>}
    </AppContainer>
  )
};

var AppContainer = styled.div`
  display: flex;
  justify-content: center;
`;



