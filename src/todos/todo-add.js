import React, { Component } from 'react';

import './todo-add.css';

class TodoAdd extends Component {
  render() {
    return (
      <div>
        <h2>What needs to be done?</h2>
        <input
          value={this.props.todoInput}
          onChange={this.props.changeTodoInput}
          className="todo-input"
          type="text" />
        <button onClick={this.props.addToDo}>Add #{this.props.nextId}</button>
      </div>
    );
  }
}

export default TodoAdd;