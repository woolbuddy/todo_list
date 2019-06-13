import React, { Component } from 'react';
import List from './components/todos/List';
import TodoForm from './components/todos/TodoForm';

class App extends Component {
  state = {
    todos: [
      { id: 1, name: 'Learn Rails', complete: true },
      { id: 2, name: 'Learn React', complete: true },
      { id: 3, name: 'Learn Router', complete: true },
    ]
  }

  render() {
    const { todos } = this.state
    return (
      <div>
        <TodoForm />
        <List name='Todo List' items={todos}/>
      </div>
    );
  }
}


export default App;
