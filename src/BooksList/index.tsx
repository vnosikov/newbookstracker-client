import React, { FC, useState } from 'react';
import QueryRenderer from '../QueryRenderer';
import { gql } from '@apollo/client';

import { IBookItem, ILanguageExt } from '../types';
import { List, Paper } from '@mui/material';
import BookItem from '../BookItem';

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

const BooksList:FC<BookListProps> = ({ currentLanguage }) => (
  <QueryRenderer
    query={BOOKS}
    render={data => (
      <Paper>
        <List>
          {data.books.map((book:IBookItem) => (
            <BookItem key={book.id} book={book} selectedLang={currentLanguage}/>
            ))}
        </List>
      </Paper>
    )} 
  />
);

type BookListProps = {
  currentLanguage: ILanguageExt;
};

export default BooksList;
