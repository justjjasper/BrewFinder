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
        <HomeIcon className="fa-solid fa-house"/>
        <Home onClick = { () => setToggleUserPage(false) }> Home </Home>


        <GlobeIcon className="fa-solid fa-earth-americas"></GlobeIcon>
        <Public> Public </Public>
        <SideContent>
          <SearchIcon className="fa-solid fa-magnifying-glass"/>
          <Search> Search </Search>
          <TagsIcon className="fa-solid fa-tag"/>
          <Tags> Tags </Tags>
          <CommunityIcon className ="fa-solid fa-people-group"/>
          <Community> Community </Community>
          <CompanyIcon className="fa-solid fa-briefcase"/>
          <Companies> Companies </Companies>

          <FormsContainer>
            <FormHeader> Forms </FormHeader>
            <FormContent>
              <FormList> How to ferment beer </FormList>
              <FormList> What is hoppy beer </FormList>
              <FormList> What makes beer extra vs lite</FormList>
              <FormList> The best type of beer for micheladas </FormList>
              <FormList> MODELO TIMEE </FormList>
            </FormContent>
          </FormsContainer>
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

var FormHeader = styled.span`
  position: relative;
  left: 80;
`;

var FormsContainer = styled.div`
  border: 1px solid;
  width: 225px;
  height: 300px;
  position: relative;
  left: -60;
  bottom: 95;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;

var FormContent = styled.div`
  padding: 5px;
`;

var FormList = styled.li`
  font-size: 20px;
`;

var Search = styled.span`
  margin: 5px;
  position: relative;
  right: 17.7;
  bottom: 14;
  :hover {
    cursor: pointer;
    font-weight: bold;
  };
`;

var SearchIcon = styled.i`
  position: relative;
  font-size: 22;
  right: 37;
  top: 15;
  color: #1976d2;
`;

var Companies = styled.span`
margin: 5px;
position: relative;
bottom: 120;
left: -12;
:hover {
  cursor: pointer;
  font-weight: bold;
};
`;

var CompanyIcon = styled.i`
  font-size: 23;
  position: relative;
  left: -37;
  bottom: 89;
  color: #1976d2;
`;

var HomeIcon = styled.i`
  position: relative;
  left: 33;
  top: 16;
  font-size: 20;
  color: #1976d2;
`;

var GlobeIcon = styled.i`
  position: relative;
  font-size: 20;
  right: 62;
  top: 55;
  color: #1976d2;
`;

var Community= styled.span`
  margin: 5px;
  position: relative;
  left: -12;
  bottom: 85;
  :hover {
    cursor: pointer;
    font-weight: bold;
  };
`;

var CommunityIcon = styled.i`
  position: relative;
  left: -40;
  bottom: 54;
  color: #1976d2;
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

var Tags = styled.span`
  margin: 5px;
  position: relative;
  bottom: 50px;
  right: 19;
  :hover {
    cursor: pointer;
    font-weight: bold;
  };
`;

var TagsIcon = styled.i`
  position: relative;
  bottom: 17;
  left: -35;
  color: #1976d2;
`;

var Home = styled.span`
  font-size: 25px;
  position: relative;
  left: 30px;
  top: 20px;
  :hover {
    cursor: pointer;
    font-weight: bold;
  };
`;

var Public = styled.span`
  font-size: 25px;
  position: relative;
  right: 62px;
  top: 55px;
  :hover {
    cursor: pointer;
    font-weight: bold;
  };
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