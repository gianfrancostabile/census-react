import React, { Component } from 'react';
import './Message.css';

interface MessageProps {
  error?: boolean;
  children: string;
}

class Message extends Component<MessageProps> {
  render() {
    const classesList = ['Message'];
    if (this.props.error) {
      classesList.push('Error');
    }
    return <div className={classesList.join(' ')}>{this.props.children}</div>;
  }
}

export default Message;
