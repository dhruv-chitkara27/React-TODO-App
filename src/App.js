import React, { Component } from 'react'
import { Table, Checkbox, Button } from 'semantic-ui-react'

import TodoApp from './components/TodoApp'

import './App.css'

fetch('http://localhost:4500/todos')
.then(data => data.json())
.then(data => console.log({ data }))
.catch(err => console.error({ err }))

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
