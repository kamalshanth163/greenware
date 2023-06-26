import React from 'react';
import './App.css';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import ProductView from './pages/ProductView';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className='body'>
          <Routes>
            <Route exact path="/" Component={Products} />
            <Route path="/products" Component={Products} />
            <Route path="/cart" Component={Cart} />
            <Route path="/products/:id" Component={ProductView} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
