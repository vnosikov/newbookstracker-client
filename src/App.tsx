import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import NewApp from './NewApp';
import Register from './Register';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />}/>
        <Route path="/" element={<NewApp />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
