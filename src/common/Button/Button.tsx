import React, { Component, MouseEventHandler } from 'react';

export interface ButtonProps {
  children: string;
  clicked: MouseEventHandler;
}

export class Button extends Component<ButtonProps> {
  render() {
    return <button onClick={this.props.clicked}>{this.props.children}</button>;
  }
}