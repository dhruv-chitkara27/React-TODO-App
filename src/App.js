import React, { Component } from 'react'
import { Table, Checkbox, Button } from 'semantic-ui-react'

import TodoApp from './components/TodoApp'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <TodoApp />
      </div>
    )
  }
}

export default App
