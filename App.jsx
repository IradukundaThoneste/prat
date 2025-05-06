import React from 'react';
import Insert from './Insert';
import Select from './Select';
import Update from './Update';
import Navigation from './navigation';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
   
        <Route path='/insert' element={<Insert />} />
        <Route path='' element={<Navigation/>} />
        <Route path='/select' element={<Select />} />
        <Route path='/update/:id' element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
