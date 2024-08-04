import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Banner from './components/Banner';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/Login';

function App() {
  return (
  <>
  <Banner/>
   <BrowserRouter>
    <Routes>
      <Route index path="/" element={<HomePage></HomePage>}/>
      <Route path='/loginPage' element={<LoginPage></LoginPage>}/>
      <Route path='/createAccountPage' element={<></>}/>
      <Route path='/updateAccountPage' element={<></>}/>
      <Route path='/aboutPage' element={<></>}/>

    </Routes>
   </BrowserRouter>
    <Footer/>
   </>
  );
}

export default App;
