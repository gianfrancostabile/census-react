import React, { Component } from 'react';

export interface LabelProps {
  for: string;
  children: any;
}

export class Label extends Component<LabelProps> {
  render() {
    return (
      <label htmlFor={'#'.concat(this.props.for)}>{this.props.children}</label>
    );
  }
}
