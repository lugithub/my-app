import React from 'react';

import Square from './square';

export default class Board extends React.Component {
  
  renderSquare(i) {
    let won = this.props.squaresWon.indexOf(i) === -1 ? '' : 'won';
    return <Square
      key={i}
      value={this.props.squares[i]}
      won={won}
      onClick={this.props.onClick.bind(null, i)} />;
  }

  render() {
    return (
      <div>
        {
          [0, 1, 2].map(row => (
            <div key={row} className="board-row">
              {[0, 1, 2].map(col => this.renderSquare(row * 3 + col))}
            </div>)
          )
        }
      </div>
    );
  }
}