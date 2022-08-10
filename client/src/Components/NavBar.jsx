import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Content from './Content/Content.jsx';
import UserPage from './User/UserPage.jsx';

export default function NavBar () {

  var [toggleUserPage, setToggleUserPage] = useState(false);

  return (
    <PageContainer>
      <NavBarContainer>
        <BrewFinderHome onClick = { () => setToggleUserPage(false) } > Brew Finder </BrewFinderHome>
        <UserIcon onClick = { () => setToggleUserPage(true) } className="fa-solid fa-user"> </UserIcon>
      </NavBarContainer>
      {!toggleUserPage && <Content/>}
      {toggleUserPage && <UserPage/>}
    </PageContainer>
  );
};



var PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

var NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-content: space-between;
  border: 2px solid;
  position: aboslute;
`;

var BrewFinderHome = styled.span`
  font-family: 'Oleo SCrip Swash Caps', cursive;
  font-size: 40px;
  :hover {
    cursor: pointer;
    color: blue;
  }
`;

var UserIcon = styled.i`
  position: relative;
  left: 1175px;
  top: 10px;
  font-size: 40px;
  :hover {
    cursor: pointer;
  }
`;
