import React, { Component, MouseEventHandler } from 'react';
import './Button.css';

export interface ButtonProps {
  type: string;
  clicked: MouseEventHandler;
  children: string;
}

export class Button extends Component<ButtonProps> {
  render() {
    const classNameList = ['Button'];
    classNameList.push(this.props.type);
    return (
      <button className={classNameList.join(' ')} onClick={this.props.clicked}>
        {this.props.children}
      </button>
    );
  }
}
