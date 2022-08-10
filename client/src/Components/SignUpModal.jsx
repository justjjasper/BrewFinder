import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SignUpModal ( {createAcc, setToggleSignUp} ) {

  var [username, setUsername] = useState('');
  var [password, setPassword] = useState('');
  var [email, setEmail] = useState('');

  var handleSubmit = (e) => {
    e.preventDefault();
    var body = {username: username, password: password, email: email};
    createAcc(body);
  };

  return (
    <ModalContainer>
      <ModalBox>
        <Header>
          <CreateAccountSpan> CREATE AN ACCOUNT </CreateAccountSpan>
          <CloseButton onClick={() => setToggleSignUp(false)} className="fa-solid fa-xmark"/>
          </Header>
        {/* <ModalBody> */}
        <UserPwSpan>
        <UsernameSpan>
          <TextField
          onChange={e => setUsername(e.target.value)}
          value={username}
          required
          id="standard-required"
          label="Username"
          variant="standard"/>
        </UsernameSpan>

        <PasswordSpan>
        <TextField
          onChange={e => setPassword(e.target.value)}
          value={password}
          required
          type='password'
          id="standard-required"
          label="Password"
          variant="standard"/>
        </PasswordSpan>
        </UserPwSpan>

        <NameSpan>
        <FirstNameSpan>
        <TextField
          required
          id="standard-required"
          label="First Name"
          variant="standard"/>
        </FirstNameSpan>

        <LastNameSpan>
        <TextField
          required
          id="standard-required"
          label="Last Name"
          variant="standard"/>
        </LastNameSpan>
        </NameSpan>

        <EmailSpan>
        <TextField
          onChange={e => setEmail(e.target.value)}
          value={email}
          required
          id="standard-required"
          label="Email"
          variant="standard"/>
        </EmailSpan>

        <CreateAccountButton>
          <Button
          onClick = {handleSubmit}
          variant="contained"
          size="medium"> Create Account
          </Button>
          </CreateAccountButton>
          {/* </ModalBody> */}
      </ModalBox>
    </ModalContainer>
  )
};

var ModalContainer = styled.div`
  display: flex;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`;

var ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fefefe;
  margin: 2% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 500px;
  height: 500px;
  justify-content: space-between;
  position: relative;
  border-radius: 10px;
  box-shadow: 0px 0.4rem 1.5rem rgb(0 0 0 / 25%);
`;

var Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

var CreateAccountSpan = styled.div`
  font-family: 'Montserrat', monospace;
  font-size: 25px;
  position: relative;
  left: 127;
  top: 20
`;

var CloseButton = styled.i`
  position: absolute;
  left: 500;
  font-size: 30px;
  :hover {
    color: #1976d2;
    text-decoration: none;
    cursor: pointer;
  };
`;

var UsernameSpan = styled.div`

`;

var PasswordSpan = styled.div`

`;

var FirstNameSpan = styled.div`

`;

var LastNameSpan = styled.div`

`;

var EmailSpan = styled.div`
  position: relative;
  left: 41;
`;

var CreateAccountButton = styled.div`
  position: relative;
  left: 155;
`;

var ModalBody = styled.div`

  display: flex;
  flex-direction: column;
  align-content: center;
`;

var UserPwSpan = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

var NameSpan = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;