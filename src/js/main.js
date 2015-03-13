"use strict";

import React from 'react';
// import React from 'react';
import TodoList from './todolist.jsx';

React.render(React.createElement(TodoList, {
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
}), document.body);
