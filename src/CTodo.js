import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incompleteTodo, deleteTodo } from './actions';

export class Todo extends Component {
  render() {
    console.log(this.props.data);

    return (
      <div className='todo'>
        <input
          className='checkbox'
          type='checkbox'
          checked='checked'
          onChange={() =>
            this.props.incompleteTodo(this.props.id, this.props.data)
          }
        />
        <span className='todotext'>{this.props.data}</span>
        <i
          className=' icon fas fa-trash'
          onClick={() => this.props.deleteTodo(this.props.id, 'CTodo')}
        ></i>
      </div>
    );
  }
}

export default connect(null, { incompleteTodo, deleteTodo })(Todo);
