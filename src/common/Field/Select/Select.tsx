import React, { Component } from 'react';
import FieldProps from '../field-props';
import './../Field.css';
import Option, { OptionProps } from './Option/Option';
import './Select.css';

export interface SelectProps extends FieldProps<HTMLSelectElement> {
  options: OptionProps[];
}

class Select extends Component<SelectProps> {
  render() {
    return (
      <select
        id={this.props.id}
        className='Field Select'
        value={this.props.value}
        onChange={this.props.changed}
        autoFocus={this.props.focus}
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

export default Select;
