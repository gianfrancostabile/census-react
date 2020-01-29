import React, { Component } from 'react';
import InputProps from '../input-props';
import './../../Field.css';

export interface InputNumberProps extends InputProps {
  value: number;
  minimum?: number;
  maximum?: number;
}

class InputNumber extends Component<InputNumberProps> {
  render() {
    return (
      <input
        id={this.props.id}
        className='Field'
        type='number'
        value={this.props.value}
        onChange={this.props.changed}
        onClick={
          this.props.selectAll
            ? event => event.currentTarget.select()
            : () => {}
        }
        autoFocus={this.props.focus}
        min={this.props.minimum}
        max={this.props.maximum}
      />
    );
  }
}

export default InputNumber;
