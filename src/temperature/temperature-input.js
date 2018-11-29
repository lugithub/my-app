import React from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

export class TemperatureInput extends React.Component {
  render() {    
    const scale = this.props.scale;
    const labelText = 'ggg';
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input 
          aria-label={labelText}
          value={this.props.temperature}
          onChange={this.props.handleChange} />
      </fieldset>
    );
  }
}
