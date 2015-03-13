"use strict";

import React from 'react';

export default React.createClass({
  getInitialState() {
    return {
      name: 'Default',
      className: 'leave'
    }
  },

  onClick(ev, id) {
    ev.preventDefault();
    this.setState({name: 'Changed!'});
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
        <a onClick={this.onClick} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} href={this.props.href} className={this.state.className} name={this.props.name}>{this.state.name}</a>
      </div>
    )
  }
});
