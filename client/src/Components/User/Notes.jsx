import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default function Notes ( {note} ) {
  return (
    <ListSpan>
      <NoteSpan> {note.note} </NoteSpan>
      </ListSpan>
  )
};

var ListSpan = styled.li`
  font-size: 24px;
`;

var NoteSpan = styled.div`
  border: 1px solid;
  border-radius: 10px;
  box-shadow: 0px 0.4rem 1.5rem rgb(0 0 0 / 25%);
`;