import React, { useState } from 'react';
import './calculator.css';
import calculate from '../logic/calculator';
import Navbar from './navBar';

const CalculatorLayout = () => {
  const [state, setState] = useState({
    obj: {},
  });
  const calculatorInput = (event) => {
    const buttonName = event.target.textContent;
    const { obj } = state;
    setState({
      obj: calculate(obj, buttonName),
    });
  };

  const { obj } = state;
  return (
    <div>
      <Navbar />
      <div className="layoutContainer">
        <div className="pConatainer">
          <p>Let us do some Math!</p>
        </div>
        <div className="App">
          <div className="calculator">
            <div className="display">
              {obj.total}
              {obj.operation}
              {obj.next}
            </div>
            <div className="buttons">
              <div className="first_row">
                <button onClick={calculatorInput} type="button">
                  AC
                </button>
                <button onClick={calculatorInput} type="button">
                  +/-
                </button>
                <button onClick={calculatorInput} type="button">
                  %
                </button>
                <button
                  onClick={calculatorInput}
                  className="operator"
                  type="button"
                >
                  ÷
                </button>
              </div>
              <div className="second_row">
                <button onClick={calculatorInput} type="button">
                  7
                </button>
                <button onClick={calculatorInput} type="button">
                  8
                </button>
                <button onClick={calculatorInput} type="button">
                  9
                </button>
                <button
                  onClick={calculatorInput}
                  className="operator"
                  type="button"
                >
                  x
                </button>
              </div>
              <div className="third_row">
                <button onClick={calculatorInput} type="button">
                  4
                </button>
                <button onClick={calculatorInput} type="button">
                  5
                </button>
                <button onClick={calculatorInput} type="button">
                  6
                </button>
                <button
                  onClick={calculatorInput}
                  className="operator"
                  type="button"
                >
                  -
                </button>
              </div>
              <div className="fourth_row">
                <button onClick={calculatorInput} type="button">
                  1
                </button>
                <button onClick={calculatorInput} type="button">
                  2
                </button>
                <button onClick={calculatorInput} type="button">
                  3
                </button>
                <button
                  onClick={calculatorInput}
                  className="operator"
                  type="button"
                >
                  +
                </button>
              </div>
              <div className="fifth_row">
                <button onClick={calculatorInput} type="button">
                  0
                </button>
                <button onClick={calculatorInput} type="button">
                  .
                </button>
                <button
                  onClick={calculatorInput}
                  className="operator"
                  type="button"
                >
                  =
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorLayout;
