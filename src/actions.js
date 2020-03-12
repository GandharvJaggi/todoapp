import { todoConstants } from './constants';
import { todosRef } from './firebase';

export const fetchTodos = () => async dispatch => {
  todosRef.on('value', snapshot => {
    dispatch({
      type: todoConstants.FETCH_TODOS,
      payload: snapshot.val() != null ? snapshot.val() : {},
    });
  });
};

export const addTodo = Todo => async dispatch => {
  console.log(Todo);

  todosRef
    .child('/ATodo')
    .push()
    .set(Todo);
};

export const completeTodo = (id, Todo) => async dispatch => {
  todosRef
    .child('/ATodo')
    .child(id)
    .remove();
  todosRef
    .child('/CTodo')
    .push()
    .set(Todo);
};

export const incompleteTodo = (id, Todo) => async dispatch => {
  todosRef
    .child('/CTodo')
    .child(id)
    .remove();
  todosRef
    .child('/ATodo')
    .push()
    .set(Todo);
};

export const deleteTodo = (id, Todo) => async dispatch => {
  console.log(Todo);
  todosRef
    .child('/'+ Todo)
    .child(id)
    .remove();
};
