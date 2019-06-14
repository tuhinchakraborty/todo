import React, { Component } from 'react';
import './../styles.css';
import AppComponent from './AppComponent';

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5')
      .then(response => response.json())
      .then(data =>
        this.setState({
          todos: data
        })
      );
  }

  handleChange = (event, id) => {
    let target = event.target;
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          if (target.type === 'checkbox') {
            if (todo.title) todo.completed = !todo.completed;
          }
          if (target.type === 'text') {
            todo.title = target.value;
          }
        }
        return todo;
      });
      return {
        todos: updatedTodos
      };
    });
  };

  addTodo = () => {
    this.state.todos.push({
      id: this.state.todos[this.state.todos.length - 1].id + 1,
      title: '',
      completed: false
    });
    this.setState({
      todos: this.state.todos
    });
  };

  render() {
    return <AppComponent data={this.state} handleChange={this.handleChange} addTodo={this.addTodo} />;
  }
}

export default App;
