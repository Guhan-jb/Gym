import React from 'react';
import Login from './Login/login';
import { BrowserRouter,Route,Routes,Router, Link } from 'react-router-dom';
import Home from './Home/home';
import Layout from './layout';

//import './App.css'
function App(){
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="Login/login" element={<Login />} />
        </Route>
    </Routes>
    </BrowserRouter>
   
    </>
  );
}
export default App;
