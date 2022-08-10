import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Button from '@mui/material/Button';

export default function BrewCard ( {addToFaves, brew} ) {

  if (brew.street === null) {
    brew.street = 'No Street Address Available'
  };
  if (brew.city === null) {
    brew.city = 'No City Availabe'
  };

  if (brew.phone) {
    var newPhone = '(' + brew.phone.slice(0,3) + ') ' + brew.phone.slice(3)
  }

  var adjust = {maxWidth: '10x', maxHeight: '10x', fontSize: '10px'};

  var handleSubmit = (e) => {
    e.preventDefault()
    addToFaves(brew);
  };

  return (
     <BrewCardContainer>
        <BrewTitle> {brew.name}</BrewTitle>
        <Image src='https://cdn.theculturetrip.com/wp-content/uploads/2016/09/main-bar-at-tir-na-nog.jpg'></Image>

        <SubContainer>
          <Info> Info </Info>
          <AddFave> <Button
          onClick={handleSubmit}
          style={adjust}
          variant="contained"
          size="medium"> Add to Favorites </Button>
           </AddFave>
        </SubContainer>

        <AddressContainer>
          <AddressIcon className="fa-solid fa-house" />
          <Address> {brew.street}, {brew.city}, {brew.state} </Address>
        </AddressContainer>

         <PhoneContainer>
          <PhoneIcon className="fa-solid fa-phone"/>
          <Phone> {newPhone || 'No Phone Number Avaiable'} </Phone>
        </PhoneContainer>

        <WebsiteContainer>
          <WebsiteIcon className ="fa-solid fa-globe" />
          <Website> <a href={brew.website_url}> {brew.website_url || 'No Website Avaiable'} </a> </Website>
        </WebsiteContainer>
     </BrewCardContainer>
  )
};

var BrewCardContainer = styled.div`
  border-radius: 10px;
  box-shadow: 0px 0.4rem 1.5rem rgb(0 0 0 / 25%);
  height: 500px;
  width: 500x;
  display: flex;
  flex-direction: column;
`;

var BrewTitle = styled.span`
  padding: 5px 0 0 5px;
  font-size: 25px;
  margin: 10px;
  font-weight: bold;
`;

var Image = styled.img`
  width: 360px;
  height: 450px;
  object-fit: cover;
  padding: 10px;
`;

var Info = styled.span`
  padding-left: 5px;
  font-size: 20px;
  font-weight: bold;
`;

var Address = styled.span`
  padding: 5px;
  border-bottom: 0.5px solid;
`;

var Phone = styled.span`
  padding: 5px;
`;

var Website = styled.span`
  padding: 5px;
`;

var SubContainer = styled.div`
  display: flex;
  align-content: space-between
`;

var AddFave = styled.div`
  margin-left: 200px;
`;

var PhoneContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 0.5px solid;
`;

var PhoneIcon = styled.i`
  position: relative;
  top: 7px;
  padding-left: 4px;
`;

var AddressContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 0.5px solid;
`;

var AddressIcon = styled.i`
  position: relative;
  top: 7px;
  padding-left: 4px;
`;

var WebsiteContainer = styled.div`
  display: flex;
  flex-direction: row;
`;


var WebsiteIcon = styled.i`
  position: relative;
  top: 7px;
  padding-left: 4px;
`;