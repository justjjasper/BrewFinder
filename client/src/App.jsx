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
      {!logIn && <NavBar username={username}/> }

     {logIn &&
     <TextContainer>
     <OpeningStatement>
        <Tittle>
          Brew Finder
        </Tittle>
        <Context>
          Find local breweries and take notes
        </Context>

      </OpeningStatement>
      </TextContainer>}
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

var OpeningStatement = styled.span`

`;

var TextContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

var Tittle = styled.span`
  font-family: 'Oleo SCrip Swash Caps', cursive;
  color: #1976d2;
  font-size: 80px;
  position: relative;
  left: 280px;
  top: 150px;
`;

var Context = styled.span`
  position: relative;
  font-family: 'Oleo SCrip Swash Caps', monospace;
  font-size: 20px;
  top: 200px;
  right: 120px;
`;