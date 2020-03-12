import React, { Component } from 'react';
import { connect } from 'react-redux';
import CTodo from './CTodo';

export class Complete extends Component {
  render() {
    return (
      <div className='complete todolist'>
        <p className="subheading">Completed Todos</p>
        {this.props.CTodo !== undefined && this.props.CTodo.length !== 0 ? (
          Object.entries(this.props.CTodo).map(([key, value]) => {
            return <CTodo data={value} key={key} id={key} />;
          })
        ) : (
          <div className='empty'>Issa empty...</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({ CTodo: state.todo.CTodo });

export default connect(mapStateToProps, {})(Complete);
