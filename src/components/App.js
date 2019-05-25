import React, { Component } from 'react';
import './../styles.css';
import ToDo from './ToDo';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import todosData from '../todosData';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar position="static" color="primary">
          <Toolbar variant="dense">
            <Typography variant="h6" color="textPrimary">
              ToDo
            </Typography>
          </Toolbar>
        </AppBar>
        <ToDo checked = {true} text = {'First Text'}/>
        <ToDo checked = {false} text = {'Second Text'}/>
        <ToDo checked = {true} text = {'Third Text'}/>
      </div>
    );
  }
}

export default App;
