import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ToDo from './ToDo';

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

class AppComponent extends Component {
  render() {
    const todos = this.props.data.todos.map(content => (
      <ToDo key={content.id} content={content} handleChange={this.props.handleChange} addTodo={this.props.addTodo} />
    ));
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
        <Fab onClick={this.props.addTodo} style={addButtonStyle}>
          <AddIcon />
        </Fab>
      </div>
    );
  }
}

export default AppComponent;
