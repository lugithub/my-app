import React from 'react';
import { connect } from 'react-redux';

import './todo-add.css';
import { typeTodo, addTodo } from './actions';

function TodoAdd({ currentLabel, nextId, typeTodo, addTodo }) {
  return (
    <div>
      <h2>What needs to be done?</h2>
      <input
        value={currentLabel}
        onChange={e => {
          e.preventDefault();
          return typeTodo(e.target.value);
        }}
        className="todo-input"
        type="text" />
      <button onClick={() => addTodo(currentLabel)}>Add # {nextId}</button>
    </div>
  );
}

const mapState = ( { currentLabel, todos }) => ({
  currentLabel,
  nextId: todos.length + 1,
});

const mapDispath = {
  typeTodo,
  addTodo,
};

export default connect(mapState, mapDispath)(TodoAdd);