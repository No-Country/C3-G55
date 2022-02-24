import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/form/login';
import Register from './components/form/register';
import Home from './screens/home';
import Header from './components/header/header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registro" element={<Register />} />
          
        </Routes>
      </BrowserRouter>
      
      <Home />
    </>
  )
}

export default App;
