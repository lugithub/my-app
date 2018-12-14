import React, { Component } from 'react';

export default class Steps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: 'asc',
    }
  }
  
  render() {
    const { history, jumpTo } = this.props; 
    
    let moves = history.map(
      ({position}, index) => {
        const row = Math.floor(position / 3) + 1;
        const col = position % 3 + 1;

        const selectedStep = index === history.length - 1 ? 'selected-step' : '';;

        return <li key={index}>
          <button
            onClick={
              jumpTo.bind(null, index)
            }
            className={selectedStep}
            >{index === 0 ? 'Goto start' : `Goto step ${index} (${row},${col})`}</button>
          </li>});
    
    if (this.state.sort === 'desc') {
      moves.reverse();
    }

    return (
      <React.Fragment>
        <button onClick={
            () => this.setState((state, props) => { return { 
              sort: state.sort === 'asc' ? 'desc' : 'asc',
            }})
          }>
          { this.state.sort === 'asc' ? <span>&uarr;</span> : <span>&darr;</span> }
        </button>
        <ol>{moves}</ol>
      </React.Fragment>
    );
  }
}