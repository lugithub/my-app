import React from 'react';

export default class Square extends React.Component {  
  render() {
    return (
      <button
        onClick={this.props.onClick}
        className="square">
        {this.props.value}
      </button>
    );
  }
}