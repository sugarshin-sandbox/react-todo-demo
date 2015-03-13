"use strict";

import React from 'react';
import A from './component.jsx';

React.render(React.createElement(A, {
  name: 'foo',
  href: '//github.com/sugarshin'
}), document.body);
