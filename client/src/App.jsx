import React, { useState, useEffect } from 'react';
import LogInForm from './Components/LogInForm.jsx';
import NavBar from './Components/NavBar.jsx';
import styled from 'styled-components';
import Button from '@mui/material/Button';

export default function App () {
  var [logIn, setLogIn] = useState(true);
  var [username, setUsername] = useState('');

  var createAcc = (body) => {
    console.log('body', body)
  };

  return (
    <AppContainer>
      {!logIn && <NavBar/> }
      {logIn && <LogInForm
      username={username}
      createAcc={createAcc}
      setUsername={setUsername}
      toggleLogIn={setLogIn}/>}
    </AppContainer>
  )
};

var AppContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;



