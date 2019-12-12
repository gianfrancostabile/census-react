import React, { Component } from 'react';

interface AuxiliaryProps {
  class?: string;
}

class Auxiliary extends Component<AuxiliaryProps> {
  render() {
    return this.props.class ? (
      <div className={this.props.class}>{this.props.children}</div>
    ) : (
      this.props.children
    );
  }
}
export default Auxiliary;
