import React, { Component } from 'react';
import '../styles/Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [
        {
          id: 'one',
          value: 1,
        },
        {
          id: 'two',
          value: 2,
        },
        {
          id: 'three',
          value: 3,
        },
        {
          id: 'four',
          value: 4,
        },
        {
          id: 'five',
          value: 5,
        },
        {
          id: 'six',
          value: 6,
        },
        {
          id: 'seven',
          value: 7,
        },
        {
          id: 'eight',
          value: 8,
        },
        {
          id: 'nine',
          value: 9,
        },
        {
          id: 'zero',
          value: 0,
        },
        {
          id: 'add',
          value: '+',
        },
        {
          id: 'subtract',
          value: '-',
        },
        {
          id: 'multiply',
          value: '*',
        },
        {
          id: 'divide',
          value: '/',
        },
        {
          id: 'equals',
          value: '=',
        },
        {
          id: 'decimal',
          value: '.',
        },
        {
        id: 'clear',
        value: 'clr',
      }
      ],
      display: '0',
    };
  }

  calc = () =>  {
    let { display } = this.state;
    if(this.isInt(display) && this.isFloat(display)) {
    this.setState({ display: eval(this.state.display) })
  }
  else return;

  };
  isInt(n){
    return Number(n) === n && n % 1 === 0;
}
  isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}
  handleClick = e => {
    const { value } = e.target
    const { display } = this.state
    if(value === 'clr') {
      this.setState({ display: 0})
    }
    else if(display === '0' || display === 0) {
      this.setState({ display: value })
    }
    else {
    this.setState({ display: display + value });
  }
  }
  render() {
    const { values, display } = this.state;
    const keys = values.map(el => {
      if(el.id !== 'equals') {
        return <button className='key' value={el.value} id={el.id} onClick={this.handleClick}>{el.value}</button>
      }
      return <button className='key' value={el.value} id={el.id} onClick={this.calc}>{el.value}</button>
    });
    return (
      <div id='calculator'>
        <div id='display'>{display}</div>
        <div id='keys'>{keys}</div>
      </div>
    );
  }
}

export default Calculator;
