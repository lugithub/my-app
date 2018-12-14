import React from 'react';

import Square from './square';
import calculateWinner from './calculate-winner';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    }
  }
  
  renderSquare(i) {
    return <Square
      value={this.state.squares[i]}
      onClick={this.handleClick.bind(this, i)} />;
  }

  handleClick(i) {
    if (this.winner || this.state.squares[i]) {
      return;
    }

    this.setState(({ squares, xIsNext }, props) => {
      const squaresNew = squares.map((item, index) => index === i ? this.nextLabel : item);
      return {
        squares: squaresNew,
        xIsNext: !xIsNext,
      };
    });
  }

  get winner() {
    return calculateWinner(this.state.squares);
  }

  get nextLabel() {
      return this.state.xIsNext ? 'X' : 'O';
  }

  render() {
    let status = `Next player: ${this.nextLabel}`;
    if (this.winner) {
      status = `Winner: ${this.winner}`;
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}