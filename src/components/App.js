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
  }

  render() {
    const todos = this.state.todos.map(content => <ToDo key={content.id} content={content} />);

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
