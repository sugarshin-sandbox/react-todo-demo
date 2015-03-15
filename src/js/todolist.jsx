"use strict";

import React from 'react';
import Todo from './todo';

let TodoList = React.createClass({
  getInitialState() {
    return {
      todos: []
    };
  },

  // ComponentがDOMツリーに追加される前に一度だけ呼ばれる
  // この中でsetStateするとrender時にまとめて行われる
  // server-side rendering時にも呼ばれる
  componentWillMount() {
    console.log('componentWillMount => TodoList');
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    }
  },

  _save(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
  },

  _fetch() {
    return JSON.parse(localStorage.getItem('todos'));
  },

  // ComponentがDOMツリーに追加された状態で呼ばれる
  // server-side rendering時は呼ばれない
  // DOMを扱う処理、Ajaxリクエスト、setIntervalの登録などserver-side rendering時には必要ない初期化処理時に
  componentDidMount() {
    this.setState({
      todos: this._fetch() ? this._fetch() : {}
    });
  },

  // componentWillUnmount() {
  //   window.removeEventListener('resize');
  // },

  componentDidUpdate(prevProps, prevState) {
    this._save(this.state.todos);
  },

  deleteTodo(id) {
    this.setState({
      todos: this.state.todos.filter( todo => {
        return todo.id !== id;
      })
    });
  },

  changeComplete(id) {
    let todos = this.state.todos.map( todo => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
      }
      return todo;
    });
    this.setState({
      todos: todos
    });
  },

  addTodo() {
    let todo = {
      id: (+new Date + Math.floor(Math.random() * 999999)),
      text: this.refs.addNew.getDOMNode().value.trim(),
      complete: false
    }
    this.setState({
      todos: this.state.todos.concat(todo)
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

export default TodoList
