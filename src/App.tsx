import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/Login';
import CreateAccountPage from './pages/CreateAccount';
import UpdateAccountPage from './pages/UpdateAccountPage';
import YugiohCardPage from './pages/YugiohCardPage';
//import Redirect from './components/Redirect/Redirect';

function App() {
  return (
  <>
  <BrowserRouter>
    <Banner/>
    <Routes>
      <Route index path="/" element={<HomePage></HomePage>}/>
      <Route path='/loginPage' element={<LoginPage></LoginPage>}/>
      <Route path='/createAccountPage' element={<CreateAccountPage></CreateAccountPage>}/>
      <Route path='/updateAccountPage' element={<UpdateAccountPage></UpdateAccountPage>}/>
      <Route path='/aboutPage' element={<></>}/>
      <Route path='/pokemon' element={<></>}/>
      <Route path='/yugioh' element={<YugiohCardPage />}/>
      <Route path="*" element={<Navigate to='/' replace />}  />

    </Routes>
   
    <Footer/>
  </BrowserRouter>
   </>
  );
}

export default App;
