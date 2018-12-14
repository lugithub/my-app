import React from 'react';

import Board from './board';
import './tic.css';
import calculateWinner from './calculate-winner';
import Steps from './steps';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        position: null,
      }],
      xIsNext: true,
    };
  }
  
  handleClick(i) {
    if (this.winner || this.draw || this.squares[i]) {
      return;
    }

    this.setState(({ history, xIsNext }, props) => {
      const squaresNew = this.squares.map((item, index) => index === i ? this.nextLabel : item);
      return {
        history: [...history, {
          position: i,
          squares: squaresNew,
        }],
        xIsNext: !xIsNext,
      };
    });
  }

  get draw() {
    const { draw } = calculateWinner(this.squares);
    return draw;    
  }
  get winner() {
    const { winner } = calculateWinner(this.squares);
    return winner;
  }

  get squaresWon() {
    const { squaresWon } = calculateWinner(this.squares);
    return squaresWon;
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
    } else if (this.draw) {
      status = 'Draw';
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
    let { history } = this.state;

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={this.squares}
            status={this.status}
            squaresWon={this.squaresWon}
            onClick={this.handleClick.bind(this)} />
        </div>
        <div className="game-info">
          <div>{this.status}</div>
          <Steps history={history} jumpTo={this.jumpTo.bind(this)} />
        </div>
      </div>
    );
  }
}
