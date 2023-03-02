import { useState } from 'react'
import { AppBar, Button, MenuItem, Select, Toolbar, Typography, Stack } from '@mui/material';
import { ILanguageExt } from './types';
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
