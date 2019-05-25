import React, { Component } from 'react';
import './../styles.css';
import ToDo from './ToDo';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import todosData from '../todosData';

class App extends Component {
  render() {
    const todos = todosData.map(item => <ToDo key={item.id} item={item} />);
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
