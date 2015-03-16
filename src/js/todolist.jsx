"use strict";

import React from 'react';
import Todo from './todo';

export default React.createClass({
  getInitialState() {
    return {
      todos: []
    };
  },

  componentWillMount() {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    }
  },

  saveTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
  },

  fetchTodos() {
    return JSON.parse(localStorage.getItem('todos'));
  },

  componentDidMount() {
    this.setState({
      todos: this.fetchTodos()
    });
  },

  // componentWillUnmount() {
  // },

  componentDidUpdate(prevProps, prevState) {
    this.saveTodos(this.state.todos);
  },

  deleteTodo(id) {
    this.setState({
      todos: this.state.todos.filter( todo => {
        return todo.id !== id;
      })
    });
  },

  changeComplete(id) {
    this.setState({
      todos: this.state.todos.map( todo => {
        if (todo.id === id) {
          todo.complete = !todo.complete;
        }
        return todo;
      })
    });
  },

  addTodo() {
    this.setState({
      todos: this.state.todos.concat({
        id: (+new Date + Math.floor(Math.random() * 999999)),
        text: this.refs.addNew.getDOMNode().value.trim(),
        complete: false
      })
    });
  },

  render() {
    let todos = this.state.todos.map( todo => {
      return (
        <li key={todo.id} className={todo.complete ? 'completed' : ''}>
          <Todo onDelete={this.deleteTodo} onChangeComplete={this.changeComplete} todo={todo} />
        </li>
      );
    });

    return (
      <div>
        <input type="text" ref="addNew" placeholder="task name" />
        <button type="button" onClick={this.addTodo}>Add</button>
        <ul>{todos}</ul>
      </div>
    );
  }
});
