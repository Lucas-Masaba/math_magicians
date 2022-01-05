import React from 'react';
import './calculator.css';

const CalculatorLayout = () => (

  <div className="App">
    <div className="calculator">
      <div className="display">
        <span>0</span>
      </div>
      <div className="buttons">
        <div className="first_row">
          <button type="button">AC</button>
          <button type="button">+/-</button>
          <button type="button">%</button>
          <button className="operator" type="button">/</button>
        </div>
        <div className="second_row">
          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button className="operator" type="button">x</button>
        </div>
        <div className="third_row">
          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button className="operator" type="button">-</button>
        </div>
        <div className="fourth_row">
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button className="operator" type="button">+</button>
        </div>
        <div className="fifth_row">
          <button type="button">0</button>
          <button type="button">.</button>
          <button className="operator" type="button">=</button>
        </div>
      </div>
    </div>
  </div>
);

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <CalculatorLayout />

    );
  }
}
