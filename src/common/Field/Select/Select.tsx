import React, { Component } from 'react';
import FieldProps from '../field-props';
import { Option, OptionProps } from './Option/Option';

export interface SelectProps extends FieldProps<HTMLSelectElement> {
  options: OptionProps[];
}

export class Select extends Component<SelectProps> {
  render() {
    return (
      <select
        id={this.props.id}
        value={this.props.value}
        onChange={this.props.changed}
      >
        {this.props.options
          ? this.props.options.map((option: OptionProps) => (
              <Option
                key={option.value}
                value={option.value}
                name={option.name}
              />
            ))
          : null}
      </select>
    );
  }
}
