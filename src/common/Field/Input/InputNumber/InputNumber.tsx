import React, { Component } from 'react';
import InputProps from '../input-props';
import './../../Field.css';

export interface InputNumberProps extends InputProps {
  value: number;
}

export class InputNumber extends Component<InputNumberProps> {
  render() {
    return (
      <input
        id={this.props.id}
        className='Field'
        type='number'
        value={this.props.value}
        onChange={this.props.changed}
      />
    );
  }
}
