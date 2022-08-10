import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import BrewCard from './BrewCard.jsx';
import BrewForm from './BrewForm.jsx';
import Gallery from './Gallery.jsx';
export default function Content () {

  var [brewList, setBrewList] = useState([]);
  var [searchForm, setSearchForm] = useState('');
  var [index, setIndex] = useState(0)

  var searchBrew = async (query) => {
     setIndex(0);
     var i = 0, queryLength = query.length;
     for(i; i < queryLength - 1; i++) {
     query = query.replace(" ", "_");
    };
    var url = `https://api.openbrewerydb.org/breweries?by_city=${query}`;
    var results = await axios.get(url)
    setBrewList(results.data);
  }

  console.log('what is', brewList)

  return (
    <ContentContainer>
      <BrewForm searchBrew={searchBrew} />
     {brewList?.length !== 0 && <Gallery index={index} setIndex={setIndex} brews={brewList}/>}
    </ContentContainer>
  )
};

var ContentContainer = styled.div`
  margin-top: 20px;
  position: relative;
  width: 600px;
  left: 450px;
`;