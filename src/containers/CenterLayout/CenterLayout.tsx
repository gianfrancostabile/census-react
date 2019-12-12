import React, { Component } from 'react';
import './CenterLayout.css';

class CenterLayout extends Component {
  render() {
    return <div className='CenterLayout'>{this.props.children}</div>;
  }
}

export default CenterLayout;
