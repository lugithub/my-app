import React from 'react';
import { connect } from 'react-redux';

import TodoList from './todo-list';
import TodoAdd from './todo-add';
import { typeTodo, addTodo } from './actions';

function TodoApp({todos, currentLabel, nextId, typeTodo, addTodo}) {
  return (
    <div>
      <h1>TODO</h1>
      <TodoList todos={todos}/>
      <TodoAdd
        currentLabel={currentLabel}
        nextId={nextId}
        typeTodo={typeTodo}
        addTodo={addTodo}
      />
    </div>
  );
}

const mapState = state => ({
  ...state,
  nextId: state.todos.length + 1,
});

const mapDispath = {
  typeTodo,
  addTodo,
};

export default connect(mapState, mapDispath)(TodoApp);