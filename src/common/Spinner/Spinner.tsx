import React, { Component } from 'react';
import './Spinner.css';

interface SpinnerProps {
  center?: boolean
}

class Spinner extends Component<SpinnerProps> {
  render() {
    const containerClasses = ['SpinnerContainer'];
    if (this.props.center === true) {
      containerClasses.push('Center');
    }
    return (
      <div className={containerClasses.join(' ')}>
        <span className='Spinner'></span>
      </div>
    );
  }
}

export default Spinner;
