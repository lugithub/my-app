import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import './todo-list.css';

// function TodoList({ todos }) {
//   return (
//     <ul className="todos">
//       {/* this is js expression */}
//       {todos.map(todo => <li key={todo.id}>{todo.label}</li>)} 
//     </ul>
//   );
// }

class TodoList extends React.PureComponent {
  render() {
    return (
    <ul className="todos">
      {/* this is js expression */}
      {this.props.todos.map(todo => <li key={todo.id}>{todo.label}</li>)} 
    </ul>
    );
  }
}

const getTodos = createSelector(state => state.todos, todos => {
  return { todos };
});

function mapState(state) {
  return getTodos(state);
}

export default connect(mapState)(TodoList);