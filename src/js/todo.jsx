"use strict";

import React from 'react';

let Todo = React.createClass({
  propTypes: {
    todo: React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      text: React.PropTypes.string.isRequired,
      complete: React.PropTypes.bool.isRequired,
      className: React.PropTypes.string
    }),
    onChangeComplete: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired
  },

  _onChangeComplete() {
    this.props.onChangeComplete(this.props.todo.id);
  },

  _onDelete() {
    this.props.onDelete(this.props.todo.id);
  },

  // // Propが更新される時に呼ばれる
  // // Componentが新しくDOMツリーに追加される時には呼ばれない
  // // Propの値に応じてStateの値を更新したいようなときに
  // componentWillReceiveProps() {
  //   console.log('componentWillReceiveProps => Todo');
  // },

  render() {
    return (
      <div>
        <input type="checkbox" checked={this.props.todo.complete} onChange={this._onChangeComplete} />
        <span>{this.props.todo.text}</span>
        <button type="button" onClick={this._onDelete}>Delete</button>
      </div>
    );
  }
});

export default Todo
