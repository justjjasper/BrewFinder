import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Content from './Content/Content.jsx';
import UserPage from './User/UserPage.jsx';

export default function NavBar ( {username} ) {
  var [toggleUserPage, setToggleUserPage] = useState(false);
  var [favorites, setFavorites] = useState([]);

  var addToFaves = async (body) => {
    body.username = username;
    setFavorites([...favorites, body]);
    console.log(body);
    var results = await axios.post('/brewery/addfave', body);
    try {console.log('posted faves')}
    catch(err) {console.log('err in adding a fave', err)}
  };

  useEffect(() => {
    var getFaves = async() => {
      var faves = await axios.get('/brewery/getfaves', {params: {username: username } })
      try{setFavorites(faves.data)}
      catch(err) {console.log('err in getting faves from client side', err)}
    }
    getFaves();
  }, []);

  console.log('what is favs', favorites)
  return (
    <PageContainer>

      <NavBarContainer>
        <BrewFinderHome onClick = { () => setToggleUserPage(false) } > Brew Finder </BrewFinderHome>
        <UserIcon onClick = { () => setToggleUserPage(true) } className="fa-solid fa-user"> </UserIcon>
      </NavBarContainer>

      {!toggleUserPage && <Content addToFaves={addToFaves}/>}
      {toggleUserPage && <UserPage favorites={favorites}/>}

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
