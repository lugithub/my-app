import React from 'react';

export default function Square({ onClick, value, won }) {
  return (
    <button
      onClick={onClick}
      className={`square ${won}`}>
      {value}
    </button>
  );
}