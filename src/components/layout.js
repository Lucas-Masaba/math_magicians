import React from 'react';
import './calculator.css';
import calculate from '../logic/calculator';

export default class CalculatorLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zero: '0',
      obj: {},
    };
  }

  calculatorInput = (event) => {
    const buttonName = event.target.textContent;
    const { obj } = this.state;
    this.setState({
      obj: calculate(obj, buttonName),
      zero: '',
    });
    if (buttonName === 'AC') {
      this.setState({
        zero: '0',
      });
    }
  }

  render() {
    const { obj } = this.state;
    const { zero } = this.state;
    return (
      <div className="App">
        <div className="calculator">
          <div className="display">
            {zero}
            {obj.total}
            {obj.operation}
            {obj.next}
          </div>
          <div className="buttons">
            <div className="first_row">
              <button onClick={this.calculatorInput} type="button">AC</button>
              <button onClick={this.calculatorInput} type="button">+/-</button>
              <button onClick={this.calculatorInput} type="button">%</button>
              <button onClick={this.calculatorInput} className="operator" type="button">÷</button>
            </div>
            <div className="second_row">
              <button onClick={this.calculatorInput} type="button">7</button>
              <button onClick={this.calculatorInput} type="button">8</button>
              <button onClick={this.calculatorInput} type="button">9</button>
              <button onClick={this.calculatorInput} className="operator" type="button">x</button>
            </div>
            <div className="third_row">
              <button onClick={this.calculatorInput} type="button">4</button>
              <button onClick={this.calculatorInput} type="button">5</button>
              <button onClick={this.calculatorInput} type="button">6</button>
              <button onClick={this.calculatorInput} className="operator" type="button">-</button>
            </div>
            <div className="fourth_row">
              <button onClick={this.calculatorInput} type="button">1</button>
              <button onClick={this.calculatorInput} type="button">2</button>
              <button onClick={this.calculatorInput} type="button">3</button>
              <button onClick={this.calculatorInput} className="operator" type="button">+</button>
            </div>
            <div className="fifth_row">
              <button onClick={this.calculatorInput} type="button">0</button>
              <button onClick={this.calculatorInput} type="button">.</button>
              <button onClick={this.calculatorInput} className="operator" type="button">=</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
