import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Content from './Content/Content.jsx';
import UserPage from './User/UserPage.jsx';

export default function NavBar () {

  var dummyData = [
    {
        "id": "lucky-luke-brewing-company-palmdale",
        "name": "Lucky Luke Brewing Company",
        "brewery_type": "micro",
        "street": "610 W Avenue O Ste 104",
        "address_2": null,
        "address_3": null,
        "city": "Palmdale",
        "state": "California",
        "county_province": null,
        "postal_code": "93551-3610",
        "country": "United States",
        "longitude": "-118.14110391594613",
        "latitude": "34.61623135674075",
        "phone": "6612705588",
        "website_url": "http://www.luckylukebrewing.com",
        "updated_at": "2021-10-23T02:24:55.243Z",
        "created_at": "2021-10-23T02:24:55.243Z"
    },
    {
        "id": "transplants-brewing-company-palmdale",
        "name": "Transplants Brewing Company",
        "brewery_type": "micro",
        "street": "40242 La Quinta Ln Ste 101",
        "address_2": null,
        "address_3": null,
        "city": "Palmdale",
        "state": "California",
        "county_province": null,
        "postal_code": "93551-3630",
        "country": "United States",
        "longitude": "-118.13973524663194",
        "latitude": "34.61452921610997",
        "phone": "6612667911",
        "website_url": "http://www.transplantsbrewing.com",
        "updated_at": "2021-10-23T02:24:55.243Z",
        "created_at": "2021-10-23T02:24:55.243Z"
    }
];
  var [toggleUserPage, setToggleUserPage] = useState(false);
  var [favorites, setFavorites] = useState(dummyData);

  var addToFaves = (body) => {
    setFavorites([...favorites, body])
    console.log('what is body', body)
  };

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
