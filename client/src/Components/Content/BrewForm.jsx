import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function BrewFrom ( {searchBrew}) {

  var [entry, setEntry] = useState('');

  var handleSearch = (e) => {
    e.preventDefault();
    searchBrew(entry);
  };

  return (
    <BrewFormContainer>
      <SearchFormContainer>

        <TextField
        value = {entry}
        onChange={e => setEntry(e.target.value)}
        fullWidth
        id="outlined-basic"
        label="Look for a brewery around you!"
        variant="outlined" />

        <Button onClick={handleSearch} variant="contained" size="medium"> Go! </Button>

       </SearchFormContainer>
    </BrewFormContainer>
  )
};

var BrewFormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

var SearchFormContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`
