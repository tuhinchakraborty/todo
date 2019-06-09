import React, { Component } from 'react';
import './../styles.css';
import ToDo from './ToDo';
import { AppBar, Toolbar, Typography, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import todosData from '../todosData';

const addButtonStyle = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed',
  backgroundColor: '#424242',
  color: '#fafafa'
};

const appbarStyle = {
  backgroundColor: '#424242'
};

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
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
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
        <AppBar style={appbarStyle} position="static">
          <Toolbar variant="dense" style={{ justifyContent: 'center' }}>
            <Typography color="inherit" variant="title">
              ToDo
            </Typography>
          </Toolbar>
        </AppBar>
        {todos}
        <Fab style={addButtonStyle}>
          <AddIcon />
        </Fab>
      </div>
    );
  }
}

export default App;
