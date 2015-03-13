"use strict";

import React from 'react';

export default React.createClass({
  propTypes: {
    href: React.PropTypes.string.isRequired
  },

  getDefaultProps() {
    return {
      href: '#'
    }
  },

  getInitialState() {
    return {
      innerText: 'Default name',
      className: 'leave'
    }
  },

  onClick(ev, id) {
    ev.preventDefault();
    this.setState({innerText: 'Changed!'});
  },

  onMouseOver(ev, id) {
    this.setState({className: 'enter'});
  },

  onMouseOut(ev, id) {
    this.setState({className: 'leave'});
  },

  render() {
    return (
      <div>
        <a onClick={this.onClick} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} href={this.props.href} className={this.state.className}>
          {this.state.innerText}
        </a>
      </div>
    )
  }
});
