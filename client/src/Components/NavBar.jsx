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
        <About> About </About>
        <FAQ> FAQ </FAQ>
        <Support> Support </Support>
        <UserIcon onClick = { () => setToggleUserPage(true) } className="fa-solid fa-user"> </UserIcon>
      </NavBarContainer>

      <SideContainer>
        <Home onClick = { () => setToggleUserPage(false) }> Home </Home>
        <Public> Public </Public>
        <SideContent>
          <Search> Search </Search>
          <Tags> Tags </Tags>
          <Community> Community </Community>
          <Companies> Companies </Companies>
        </SideContent>
      </SideContainer>
      {!toggleUserPage && <Content addToFaves={addToFaves}/>}
      {toggleUserPage && <UserPage username={username} favorites={favorites}/>}

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
  border-radius: 10px;
`;

var Search = styled.span`
  margin: 5px;
  :hover {
    cursor: pointer;
    font-weight: bold;
  };
`;

var Tags = styled.span`
margin: 5px;
:hover {
  cursor: pointer;
  font-weight: bold;
};
`;

var Community= styled.span`
margin: 5px;
:hover {
  cursor: pointer;
  font-weight: bold;
};
`;

var Companies = styled.span`
margin: 5px;
:hover {
  cursor: pointer;
  font-weight: bold;
};
`;

var BrewFinderHome = styled.span`
  font-family: 'Oleo SCrip Swash Caps', cursive;
  font-size: 40px;
  :hover {
    cursor: pointer;
    color: #1976d2;
  }
`;

var UserIcon = styled.i`
  position: relative;
  left: 870px;
  top: 10px;
  font-size: 40px;
  :hover {
    cursor: pointer;
    color: #1976d2;
  }
`;

var Home = styled.span`
  font-size: 25px;
  position: relative;
  left: 30px;
  top: 20px;
  :hover {
    cursor: pointer;
    color: #1976d2;
  }
`;

var Public = styled.span`
  font-size: 25px;
  position: relative;
  right: 37px;
  top: 55px;
`;

var SideContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  left: 70px;
  font-size: 25px;
  top: 45px;
`;

var About = styled.span`
  font-family: 'Ubuntu', monospace;
  font-size: 35px;
  position: relative;
  left: 200px;
  top: 8px;
  :hover {
    cursor: pointer;
    color: #1976d2;
  }
`;

var FAQ = styled.span`
  font-family: 'Ubuntu', monospace;
  font-size: 35px;
  position: relative;
  left: 400px;
  top: 8px;
  :hover {
    cursor: pointer;
    color: #1976d2;
  }
`;

var Support = styled.span`
  font-family: 'Ubuntu', monospace;
  font-size: 35px;
  position: relative;
  left: 670px;
  top: 8px;
  :hover {
    cursor: pointer;
    color: #1976d2;
  }
`;

var SideContainer = styled.div`
  border-right: 0.5px solid;
  width: 250px;
  height: 1000px

`;