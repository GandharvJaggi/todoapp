import React, { Component } from 'react';
import './App.css';
import './firebase';
import { connect } from 'react-redux';
import Active from './Active';
import Complete from './Complete';
import Add from './AddTodo';
import { fetchTodos } from './actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div className='App'>
        <div className='container'>
          <Add />
          <Active />
          <Complete />
        </div>
      </div>
    );
  }
}

export default connect(null, {
  fetchTodos,
})(App);
