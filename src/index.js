import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './components/footer/Footer';
import NavBar from './components/Navbar/NavBar'
import Welcome from './components/Welcome/Welcome'
import CreateArticle from './components/CreateArticle/CreateArticle'
import Login from './components/Login/Login';
import SignUp from './components/signup/SignUp';

ReactDOM.render(
<Router>
  <NavBar />
  <Routes>
    <Route exact path='/' element={<Welcome />} />
    <Route path='/about' element={<Welcome />} />
    <Route path='/articles/create' element={<CreateArticle />} />
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<SignUp />} />
  </Routes>
  <Footer />
</Router>
, document.getElementById('root')
)
