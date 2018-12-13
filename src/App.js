import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import { TemperatureInput } from './temperature/temperature-input';
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
      <React.Fragment>
        <img src={logo}  className="App-logo" alt="Logo" />
        <Calculator />
      </React.Fragment>
    );
  }
}

export default App;
