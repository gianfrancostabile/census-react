import React, { Component } from 'react';
import './Label.css';

export interface LabelProps {
  for: string;
  children: any;
}

export class Label extends Component<LabelProps> {
  render() {
    return (
      <label htmlFor={this.props.for} className="Label">{this.props.children}</label>
    );
  }
}
