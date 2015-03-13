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

  render() {
    return (
      <div className={this.props.complete}>
        <input type="checkbox" value={this.props.complete} onChange={this._onChangeComplete} />
        <span className={this.props.className}>{this.props.text}</span>
        <button type="button" onClick={this._onDelete}>Delete</button>
      </div>
    )
  }
});

export default Todo