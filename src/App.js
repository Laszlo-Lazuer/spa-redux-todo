import React, { Component } from 'react';
import './App.css';
import { createStore } from 'redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Todo List!</h2>
      </div>
    );
  }
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'TODO_ADD' : {
      return applyAddTodo(state, action);
    }
    case 'TODO_TOGGLE' : {
      return applyToggleTodo(state, action);
    }
    default: return state;
  }
}

const store = createStore(reducer, []);

store.dispatch({
  type: 'TODO_ADD',
  todo: { id: '0', name: 'learn redux', completed: false },
});

function applyAddTodo(state, action) {
  return state.concat(action.todo);
}

function applyToggleTodo(state, action)  {
  return state.map(todo =>
    todo.id === action.todo.id
    ? Object.assign({}, todo, {completed: !todo.completed})
    : todo
  );
}

console.log(store.getState());

export default App;
