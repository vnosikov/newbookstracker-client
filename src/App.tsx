import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import NewApp from './NewApp';
import Register from './Register';
import Login from './Login';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<NewApp />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
