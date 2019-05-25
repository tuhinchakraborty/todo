import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { TextField } from '@material-ui/core';

class ToDo extends Component {
  render() {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
        <Checkbox color="primary" onChange={() => this.props.handleChange(this.props.content.id)} />
        <TextField id="outlined-bare" placeholder={this.props.content.text} margin="normal" variant="outlined" />
      </div>
    );
  }
}

export default ToDo;
