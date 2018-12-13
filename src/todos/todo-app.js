import React, { Component } from 'react';

import TodoList from './todo-list';
import TodoAdd from './todo-add';

export default class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todoInput: '',
    }

    this.changeTodoInput = this.changeTodoInput.bind(this);
    this.addToDo = this.addToDo.bind(this);
    this.nextId = this.nextId.bind(this);
  }
  
  changeTodoInput(e) {
    // e.target is mutable

    const {target: {value}} = e;

    return new Promise((resolve, reject) => {
      this.setState((state, props) => {
        return { 
          todoInput: value,
        };
      }, resolve);
    });
  }

  addToDo() {
    return new Promise(resolve => {
      this.setState((state, props) => {        
        return { 
          todos: [...state.todos, {id: this.nextId(), label: state.todoInput}],
          todoInput: '',
       }}, resolve);
    });
  }

  nextId() {
    return this.state.todos.length + 1;
  }

  render() {
    return (
      <div>
        <h1>TODO</h1>
        <TodoList todos={this.state.todos}/>
        <TodoAdd
          nextId={this.nextId()}
          todoInput={this.state.todoInput}
          changeTodoInput={this.changeTodoInput}
          addToDo={this.addToDo}/>
      </div>
    );
  }
}
