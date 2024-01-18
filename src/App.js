import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './pages/Home';
import AddNewOrder from './pages/AddNewOrder';
import Header from './components/Header';
import AddOrder from './components/AddOrder';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ConfigureOrder from './components/ConfigureOrder';
import Favorites from './components/Favorites';
import FinalCart from './components/FinalCart';


function App() {
  return (
    <div className="content-wrapper">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/addNewOrder" element={<AddNewOrder />} />
        <Route path="/addOrder" element={<AddOrder />} />
        <Route path="/configureOrder" element={<ConfigureOrder />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/archivedCarts" element={<Favorites />} />
        <Route path="/preview" element={<FinalCart />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
