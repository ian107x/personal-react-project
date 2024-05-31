import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Banner from './components/Banner';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Banner/>}/>
      <Route index path="/h" element={<Banner/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
