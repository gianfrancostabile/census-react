import React, { Component } from 'react';
import './Waiting.css';

let intervalEvent: NodeJS.Timeout;

interface WaitingProps {
  children: string;
}

interface WaitingState {
  message: string;
}

class Waiting extends Component<WaitingProps, WaitingState> {

  constructor(props: WaitingProps) {
    super(props);
    this.state = { message: props.children };
  }

  componentDidMount() {
    intervalEvent = setInterval(() => {
      this.setState(previousState => {
        let message = previousState.message;
        if (message.endsWith('...')) {
          message = message.slice(0, message.length - 3);
        } else {
          message = message.concat('.');
        }
        return {
          message
        };
      });
    }, 500);
  }

  componentWillUnmount() {
    clearInterval(intervalEvent);
  }

  render() {
    return <p className='Waiting'>{this.state.message}</p>;
  }
}

export default Waiting;
