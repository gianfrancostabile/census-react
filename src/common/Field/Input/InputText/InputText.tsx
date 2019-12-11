import React, { Component } from 'react';
import InputProps from '../input-props';

export interface InputTextProps extends InputProps {
  value: string;
}

export class InputText extends Component<InputTextProps> {
  render() {
    return (
      <input
        id={this.props.id}
        type='text'
        value={this.props.value}
        onChange={this.props.changed}
      />
    );
  }
}
