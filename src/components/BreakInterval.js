import React, { Component } from 'react';

class BreakInterval extends Component {
  decreaseCounter = () => {
    if (this.props.breakInterval === 1) {
      return;
    }
  }

  increaseCounter = () => {
    if (this.props.breakInterval === 60) {
      return;
    }
    this.props.increaseBreak();
  }

  decreaseCounter = () => {
    if (this.props.breakInterval === 60) {
      return;
    }
    this.props.decreaseBreak();
  }

  render = () => { 
    return (
      <section>
        <h2>Descansa</h2>
        <section className="interval-container">
          <button
            disabled={this.props.isPlay === true ? 'disabled' : ''}
            onClick={this.decreaseCounter}
          >
            -
          </button>

          <p className="interval-length"> {this.props.breakInterval} </p>

          <button
            disabled={this.props.isPlay === true ? 'disabled' : ''}
            onClick={this.increaseCounter}
          >
            +
          </button>
        </section>
      </section>
    );
  }
}

export default BreakInterval;