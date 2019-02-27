import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



/*
<div class="app">
  <div class="todo-container">
    <div class="todo-item-row">Learn React</div>
    <div class="todo-item-row">Learn Redux</div>
    <div class="todo-item-row">Learn React Native</div>
  </div>
</div>
*/

const todos = [
  'Learn React',
  'Learn Redux',
  'Learn React Native',
]


class App extends Component {
  render() {
    return React.createElement(
      'div',
      {
        className: 'app',
      },
      React.createElement(
        'div',
        {
          className: 'todo-container',
        },
        todos.map((todo, index) =>
          React.createElement(
        'div',
      {
        className: 'todo-item-row',
        key: index,
      },
      todo,
     ),
    ),
  ),
  )
}
}
export default App;
