import React from 'react';

import Board from './board';
import './tic.css';
import calculateWinner from './calculate-winner';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true,
    };
  }
  
  handleClick(i) {

    if (this.winner || this.squares[i]) {
      return;
    }

    this.setState(({ history, xIsNext }, props) => {
      const squaresNew = this.squares.map((item, index) => index === i ? this.nextLabel : item);
      return {
        history: [...history, { squares: squaresNew }],
        xIsNext: !xIsNext,
      };
    });
  }

  get winner() {
    return calculateWinner(this.squares);
  }

  get nextLabel() {
      return this.state.xIsNext ? 'X' : 'O';
  }

  get squares() {
    const { history } = this.state;
    const i = history.length - 1;
    const { squares } = history[i];
    return squares;
  }

  get status() {
    let status = `Next player: ${this.nextLabel}`;
    if (this.winner) {
      status = `Winner: ${this.winner}`;
    }
    return status;
  }

  jumpTo(i) {
    const history = this.state.history.slice(0, i + 1);
    this.setState((state, props) => {
      return {
        history,
      };
    });
  }

  render() {
    let moves = this.state.history.map(
      (item, index) => (
        <li key={index}>
          <button onClick={this.jumpTo.bind(this, index)}>{index === 0 ? 'Goto start' : `Goto step ${index}`}</button>
        </li>));

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={this.squares}
            status={this.status}
            onClick={this.handleClick.bind(this)} />
        </div>
        <div className="game-info">
          <div>{this.status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}
