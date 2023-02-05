import React, { FC } from 'react';
import { css } from '@emotion/react';
import { useTheme } from '@mui/material/styles';
import { ListItem, ListItemText, Badge } from '@mui/material';
import {  SerializedStyles } from '@emotion/serialize';
import { IBookItem, ILanguage, ILanguageExt, ITString } from '../types';

const bookItemStyles: (arg: { read: Boolean}) => SerializedStyles =
  ({ read }) => css`
    background-color: ${read ? '#f5f5f5' : 'inherit'};
  `;

const getDisplayString = (
  selectedLang:ILanguageExt,
  mainLang: ILanguage
) => (
  tString:ITString
) => {
  const activeLang = (selectedLang === 'default') ? mainLang : selectedLang;
  if (tString[activeLang] !== null ) {
    return tString[activeLang];
  }
  return tString[mainLang];
} 

const BookItem:FC<BookItemProps> = ({ book, selectedLang }) => {
  const gds = getDisplayString(selectedLang, book.mainLang);
  const authors = book.authors.map(author => gds(author));
  const displayName = gds(book.title);

  return (
    <ListItem css={bookItemStyles({ read: book.read })}>
      <ListItemText primary={displayName} secondary={authors} />
      <Badge badgeContent={book.refsNumber} color="primary" />
    </ListItem>
  );
}

type BookItemProps = {
  book: IBookItem,
  selectedLang: ILanguageExt,
}

export default BookItem;
