import React, { FC } from 'react';
import { css } from '@emotion/react';
import { useTheme } from '@mui/material/styles';
import { ListItem, ListItemText, Badge } from '@mui/material';
import {  SerializedStyles } from '@emotion/serialize';
import { IBookItem, ILanguage, ITString } from '../types';

const bookItemStyles: (arg: { read: Boolean}) => SerializedStyles =
  ({ read }) => css`
    background-color: ${read ? '#f5f5f5' : 'inherit'};
  `;

const BookItem:FC<BookItemProps> = ({ book, selectedLang }) => {
  const theme = useTheme();
  console.log(theme);

  const activeLang = (selectedLang === 'default') ? book.mainLang : selectedLang;

  const authors = book.authors.map(author => author[activeLang]);
  const displayName = book.title[activeLang];

  return (
    <ListItem css={bookItemStyles({ read: book.read })}>
      <ListItemText primary={displayName} secondary={authors} />
      <Badge badgeContent={book.refsNumber} color="primary" />
    </ListItem>
  );
}

type BookItemProps = {
  book: IBookItem
  selectedLang: ILanguage | 'default',
}

export default BookItem;
