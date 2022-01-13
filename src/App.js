import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/calculator';
import Home from './components/pages/home';
import Quote from './components/pages/quote';

const App = () => (
  <Routes>
    <Route path="/calculator" element={<Calculator />} />
    <Route path="/" element={<Home />} />
    <Route path="/quote" element={<Quote />} />
  </Routes>
);

export default App;
