import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SignUpModal from './SignUpModal.jsx';

export default function LogInForm( {createAcc, toggleLogIn, username, setUsername} ) {

  var [password, setPassword] = useState('');
  var [togglePW, setTogglePW] = useState(true);
  var [toggleSignUp, setToggleSignUp] = useState(false);

  var handleLogIn = async (e) => {
    e.preventDefault();
    var userInfo = await axios.get('/brewery/getuserinfo');
    var info = userInfo.data;

    var checkUser = false;
    var user = info.forEach((each) => {
      if (each.username === username) {
        return checkUser = true;
      }
    });

    var checkPW = false;
    var passwordCheck = info.forEach((each) => {
      if (each.password === password) {
        return checkPW = true;
      }
    });

    if (checkUser && checkPW) {
      toggleLogIn(false);
    } else {
      alert('Username or password is incorrect')
    };
  };

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

    <SignUpDiv> <Button onClick={() => setToggleSignUp(true)} variant="contained" color="success"> Sign Up </Button> </SignUpDiv>
    {toggleSignUp && <SignUpModal createAcc={createAcc} setToggleSignUp={setToggleSignUp}/>}
    </LogInFormContainer>
  )
};

var LogInFormContainer = styled.div`
  border: 1.2px solid;
  padding: 25px 50px 10px 50px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 140px;
  left: 540px;
  border-radius: 10px;
  box-shadow: 0px 0.4rem 1.5rem rgb(0 0 0 / 25%);
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