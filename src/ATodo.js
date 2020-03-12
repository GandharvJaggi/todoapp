import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeTodo, deleteTodo } from './actions';

export class Todo extends Component {
  render() {
    return (
      <div className='todo'>
        <input
          className='checkbox'
          type='checkbox'
          onChange={() =>
            this.props.completeTodo(this.props.id, this.props.data)
          }
        />
        <span className='todotext'>{this.props.data}</span>
        <i
          className='icon fas fa-trash'
          onClick={() => this.props.deleteTodo(this.props.id, 'ATodo')}
        ></i>
      </div>
    );
  }
}

export default connect(null, { completeTodo, deleteTodo })(Todo);
