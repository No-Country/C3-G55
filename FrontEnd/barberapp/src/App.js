import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/form/login';
import Register from './components/form/register';
import Home from './screens/home';
import Header from './components/header/Header';
import Date from './screens/Date';
import Footer from './components/footer/footer';



function App() {
  return (
    <>
      <BrowserRouter>
        <Header />        
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registro" element={<Register />} />
          <Route path="/Date" element={<Date/>} />          
        </Routes>     

      </BrowserRouter>
      
      <Footer />
    </>
  )
}

export default App;
