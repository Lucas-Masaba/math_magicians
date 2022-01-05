import React from 'react';
import Calculator from './components/calculator';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Calculator />

    );
  }
}
