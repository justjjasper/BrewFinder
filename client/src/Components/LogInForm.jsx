import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function LogInForm( {toggleLogIn} ) {

  var [username, setUsername] = useState('');
  var [password, setPassword] = useState('');
  var [togglePW, setTogglePW] = useState(true);

  var handleLogIn = (e) => {
    e.preventDefault();
    toggleLogIn(false);
  }
  return (
    <LogInFormContainer>

     <UsernameDiv> <TextField
        onChange = {e => setUsername(e.target.value)}
        value= {username}
        id="outlined-basic"
        label="username"
        variant="outlined" />
      </UsernameDiv>

     <PasswordDiv> <TextField
        onChange = {e => setPassword(e.target.value)}
        type={togglePW ? 'password' : 'text'}
        id="outlined-basic"
        label="password"
        value= {password}
        variant="outlined" />
     </PasswordDiv>

     <EyeIcon onClick={() => setTogglePW(!togglePW)} className="fas fa-eye"/>
     <Button onClick={handleLogIn}variant="contained" size="medium"> Log In </Button>
    <LineDiv></LineDiv>
    <SignUpDiv> <Button variant="contained" color="success"> Sign Up </Button> </SignUpDiv>

    </LogInFormContainer>
  )
};

var LogInFormContainer = styled.div`
  border: 2px solid;
  padding: 25px 50px 10px 50px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 140px;
`;

var UsernameDiv = styled.div`
  padding: 10px;
`;
var PasswordDiv = styled.div`
  padding: 10px;
`;

var SignUpDiv = styled.div`
  padding-top: 9px;
  position: relative;
  left: 54px;

`;

var LineDiv = styled.div`
  padding: 5px;
  border-bottom: 1px solid;
`;

var EyeIcon = styled.i`
  position: absolute;
  left: 230px;
  bottom: 133px;
`;