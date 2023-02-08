import React, { useState, Key } from 'react'
import TestComp from './TestComp';
import ApolloCmp from './ApolloCmp';
import BookItem from './BookItem';
import { css } from '@emotion/react';
import { AppBar, Button, List, MenuItem, Select, Toolbar, Typography, Stack, Paper } from '@mui/material';
import { gql } from '@apollo/client';
import QueryRenderer from './QueryRenderer';
import { IBookItem, ILanguageExt } from './types';
import './App.css';
import BooksList from './BooksList';



function App() {
  const [selectedLang, setSelectedLang] = useState<ILanguageExt>('default');
  return (
    <Stack>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6">Books Tracker 2</Typography>
          <Button sx={{color: 'white'}}>Login</Button>
        </Toolbar>
      </AppBar>
      <Toolbar sx={{ justifyContent: 'space-between'}} disableGutters>
        <Stack direction="row">
          <Button>Test Button 1</Button>
          <Button>Test Button 2</Button>
          <Button>Test Button 2</Button>
        </Stack>
        <Select value={selectedLang} onChange={(e) => setSelectedLang(e.target.value as ILanguageExt)}>
          <MenuItem value="default">Default</MenuItem>
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="ru">Russian</MenuItem>
        </Select>
      </Toolbar>
      <BooksList currentLanguage={selectedLang} />
    </Stack>    
  )
}

export default App

// <div>
//       {/* @ts-ignore */}
//       <Select value={selectedLang} onChange={(e) => setSelectedLang(e.target.value)}>
//         <MenuItem value="default">Default</MenuItem>
//         <MenuItem value="en">English</MenuItem>
//         <MenuItem value="ru">Russian</MenuItem>
//       </Select>
//       <QueryRenderer
//         query={BOOKS}
//         render={data => (
//           <List>
//             {data.books.map((book:IBookItem) => (
//               <BookItem key={book.id} book={book} selectedLang={selectedLang}/>
//             ))}
//           </List>
//         )} 
//       />
//     </div>