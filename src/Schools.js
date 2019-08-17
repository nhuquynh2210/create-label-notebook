import React, { Component } from 'react';

export default class Schools extends Component {
  render() {
    const { school } = this.props;
    return (
      <div
        style={{
          fontSize: 14,
          textAlign: 'center',
          fontWeight: 'bold',
          marginTop: '8px'
        }}
      >
        {school.toUpperCase()}
      </div>
    );
  }
}
