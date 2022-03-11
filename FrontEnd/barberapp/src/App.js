import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/form/login';
import Register from './components/form/register';
import Home from './screens/home';
import Header from './components/header/Header';
import Date from './screens/Date';
import Footer from './components/footer/footer';
import Reserva from './components/reserva/reserva';
import '../src/components/assets/styles/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import {tokenValidate} from "./reducers/authReducer";




const App = () => {
  const dispatch = useDispatch();
  const {isAuth, loading} = useSelector((state) => state.Auth);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token) {
      dispatch(tokenValidate());
    }
  }, [dispatch])



  if(loading){
    return<h1>esperee</h1>
  }


  return (
    <>
      <BrowserRouter>
        <Header />        
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registro" element={<Register />} />
          <Route path="/Date" element={<Date />} />
          <Route path="/Reserva" element={<Reserva />} />
          
        </Routes>     

      </BrowserRouter>
      
      <Footer />
    </>
  )
}

export default App;
