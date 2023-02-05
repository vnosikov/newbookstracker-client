import React, { useState, Key } from 'react'
import TestComp from './TestComp';
import ApolloCmp from './ApolloCmp';
import BookItem from './BookItem';
import { List, MenuItem, Select } from '@mui/material';
import { gql } from '@apollo/client';
import QueryRenderer from './QueryRenderer';
import { IBookItem, ILanguageExt } from './types';

const BOOKS = gql`
  query GetBooks {
    books {
      id
      title {
        ru
        en
      }
      authors {
        ru
        en
      }
      refsNumber
      read
      mainLang
      marked
    }
  }
`;

function App() {
  const [selectedLang, setSelectedLang] = useState<ILanguageExt>('default');
  return (
    <div>
      {/* @ts-ignore */}
      <Select value={selectedLang} onChange={(e) => setSelectedLang(e.target.value)}>
        <MenuItem value="default">Default</MenuItem>
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="ru">Russian</MenuItem>
      </Select>
      <QueryRenderer
        query={BOOKS}
        render={data => (
          <List>
            {data.books.map((book:IBookItem) => (
              <BookItem key={book.id} book={book} selectedLang={selectedLang}/>
            ))}
          </List>
        )} 
      />
    </div>
  )
}

export default App
