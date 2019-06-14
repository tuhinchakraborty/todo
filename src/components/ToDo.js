import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { TextField } from '@material-ui/core';

class ToDo extends Component {
  render() {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center' }}>
        <Checkbox
          color="primary"
          checked={this.props.content.completed}
          onChange={event => this.props.handleChange(event, this.props.content.id)}
        />

        <TextField
          disabled={this.props.content.completed}
          value={this.props.content.title}
          margin="normal"
          style={{ width: '50%' }}
          onChange={event => this.props.handleChange(event, this.props.content.id)}
        />
      </div>
    );
  }
}

export default ToDo;
