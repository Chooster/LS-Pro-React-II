import React, { Component } from 'react';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.incrementCount = this.incrementCount.bind(this);
    this.state = {
      count: 0
    };
  }

  incrementCount() {
    this.setState(currentState => {
      return {
        count: currentState.count + 1
      }
    });
  }

  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}
