import React from 'react';
import Navbar from '../navBar';

const Quote = () => (
  <div>
    <div>
      <Navbar />
    </div>
    <div className="quoteContainer">
      <p className="quoteP">
        Mathematics is not about numbers, equations, computations, or
        algorithms: it is about understanding. -William Paul Thurston
      </p>
    </div>
  </div>
);
export default Quote;
