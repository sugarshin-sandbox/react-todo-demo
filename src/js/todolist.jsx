"use strict";

import React from 'react';
import Todo from './todo.jsx';

let TodoList = React.createClass({
  getInitialState() {
    return {
      todos: [
        {
          id: 1,
          text: "todo1",
          complete: false,
          className: ''
        },
        {
          id: 2,
          text: "todo2",
          complete: false,
          className: ''
        },
        {
          id: 3,
          text: "todo3",
          complete: false,
          className: ''
        }
      ]
    };
  },

  deleteTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return todo.id !== id;
      })
    });
  },

  changeCompleteTodo(id) {
    let todos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
      }
      return todo;
    });
    this.setState({
      todos: todos
    });
  },

  render() {
    let todos = this.state.todos.map((todo) => {
      return <li key={todo.id}><Todo onDelete={this.deleteTodo} onChangeComplete={this.changeCompleteTodo} todo={todo} /></li>;
    });
    return <ul>{todos}</ul>;
  }
});

export default TodoList