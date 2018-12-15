import React, { Component } from 'react';

import './todo-add.css';

function TodoAdd({ currentLabel, nextId, typeTodo, addTodo }) {
  return (
    <div>
      <h2>What needs to be done?</h2>
      <input
        value={currentLabel}
        onChange={e => typeTodo(e.target.value)}
        className="todo-input"
        type="text" />
      <button onClick={() => addTodo(currentLabel)}>Add # {nextId}</button>
    </div>
  );
}

export default TodoAdd;