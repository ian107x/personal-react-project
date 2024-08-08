import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Banner from './components/Banner';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/Login';
import CreateAccountPage from './pages/CreateAccount';
import UpdateAccountPage from './pages/UpdateAccountPage';
import YugiohCardPage from './pages/YugiohCardPage';

function App() {
  return (
  <>
  <Banner/>
   <BrowserRouter>
    <Routes>
      <Route index path="/" element={<HomePage/>}/>
      <Route path='/loginPage' element={<LoginPage></LoginPage>}/>
      <Route path='/createAccountPage' element={<CreateAccountPage></CreateAccountPage>}/>
      <Route path='/updateAccountPage' element={<UpdateAccountPage></UpdateAccountPage>}/>
      <Route path='/aboutPage' element={<></>}/>
      <Route path='/pokemon' element={<></>}/>
      <Route path='/yugioh' element={<YugiohCardPage />}/>


    </Routes>
   </BrowserRouter>
  <Footer/>
   </>
  );
}

export default App;
