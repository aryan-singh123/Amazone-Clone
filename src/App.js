
import './App.css';
import Checkout from './Checkout';
// import React{Component} from 'react';
import Header from './Header';
import Home from './Home';
// import Checkout from './Checkout';
 import{ BrowserRouter, Route, Routes} from 'react-router-dom'
// import Checkout from './Checkout';
// import { Component } from 'react';
// import Product from './Product';
// import { createBrowserRouter } from "react-router-dom";


function App() {
  return (
   <>
   <Header/>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/checkout' element={<Checkout/>}></Route>
    </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
