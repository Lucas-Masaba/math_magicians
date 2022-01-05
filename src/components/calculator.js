import React from 'react';
import CalculatorLayout from './layout';

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
