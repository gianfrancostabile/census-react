import React, { Component } from 'react';

export interface OptionProps {
  value: string | number;
  name: string | number;
}

export class Option extends Component<OptionProps> {
  render() {
    return <option value={this.props.value}>{this.props.name}</option>;
  }
}
