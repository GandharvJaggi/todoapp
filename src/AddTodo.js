import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';

export class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      todo: '',
    };
  }

  inputChange = e => {
    this.setState({ todo: e.target.value });
  };

  formSubmit = e => {
    e.preventDefault();
    if (this.state.todo.length > 0) {
      this.props.addTodo(this.state.todo);
      this.setState({ todo: '' });
    }
  };

  render() {
    return (
      <div className='add'>
        <p className="heading">Todo App</p>
        <form onSubmit={e => this.formSubmit(e)}>
          <input
            className='input'
            type='text'
            placeholder='Add Todo'
            value={this.state.todo}
            onChange={this.inputChange}
          />
        </form>
      </div>
    );
  }
}

export default connect(null, { addTodo })(AddTodo);
