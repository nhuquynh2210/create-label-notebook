import React, { Component } from 'react';

export default class Field extends Component {
  render() {
    const { text } = this.props;
    return (
      <div
        style={{
          marginTop: '8px',
          textAlign: 'center',
          fontWeight: '600',
          fontSize: 15
        }}
      >
        <span>{text}</span>
      </div>
    );
  }
}
