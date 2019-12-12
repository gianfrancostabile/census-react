import React, { Component } from 'react';
import './Title.css';

interface TitleProps {
  children: string;
}

class Title extends Component<TitleProps> {
  render() {
    return (
      <header className="Title">
        <h1>{this.props.children}</h1>
      </header>
    );
  }
}

export default Title;
