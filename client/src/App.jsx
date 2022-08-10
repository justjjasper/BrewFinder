import React, { useState, useEffect } from 'react';
import LogInForm from './Components/LogInForm.jsx';
import NavBar from './Components/NavBar.jsx';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function App () {
  var [logIn, setLogIn] = useState(true);
  var [username, setUsername] = useState('');

  var createAcc = async (body) => {
    var results = await axios.post('/brewery/signup', body)
    try {console.log('it worked')}
    catch(err) {console.log('err in creating acc', err)}
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



