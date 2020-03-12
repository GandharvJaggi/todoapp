import React, { Component } from 'react';
import { connect } from 'react-redux';
import ATodo from './ATodo';

export class Active extends Component {
  render() {
    return (
      <div className='active todolist'>
        <p className="subheading">Active Todos</p>
        {this.props.ATodo !== undefined && this.props.ATodo.length !== 0 ? (
          Object.entries(this.props.ATodo).map(([key, value]) => {
            return <ATodo data={value} key={key} id={key} />;
          })
        ) : (
          <div className='empty'>No Active Todos currently</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({ ATodo: state.todo.ATodo });

export default connect(mapStateToProps, {})(Active);
