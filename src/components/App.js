import React, { Component } from 'react';
import './../styles.css';
import ToDo from './ToDo';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import todosData from '../todosData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      });
      return {
        todos: updatedTodos
      };
    });
  }

  render() {
    const todos = this.state.todos.map(content => <ToDo key={content.id} content={content} handleChange={this.handleChange} />);

    return (
      <div>
        <AppBar position="static" color="primary">
          <Toolbar variant="dense">
            <Typography variant="h6" color="textPrimary">
              ToDo
            </Typography>
          </Toolbar>
        </AppBar>
        {todos}
      </div>
    );
  }
}

export default App;
