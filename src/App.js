import React from 'react';
import './App.css';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>         
          <Route exact path="/" Component={Products} />
          <Route path="/cart" Component={Cart} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
