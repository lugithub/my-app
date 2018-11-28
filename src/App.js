import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
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

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {temperature: '', scale: 'c'};
  }

  handleChange(scale, e) {
    this.setState({
      scale,
      temperature: e.target.value,      
    });
  }

  render() {
    const temperature = this.state.temperature;

    return (
      <div>
        <TemperatureInput scale="c" handleChange={this.handleChange.bind(this, 'c')} temperature={
          this.state.scale === 'c' ? temperature : toCelsius(temperature)}/>
        <TemperatureInput scale="f" handleChange={this.handleChange.bind(this, 'f')} temperature={
          this.state.scale === 'f' ? temperature : toFahrenheit(temperature)}/>
        <fieldset>
          <BoilingVerdict
            celsius={parseFloat(temperature)} />

        </fieldset>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Calculator />
    );
  }
}

export default App;
