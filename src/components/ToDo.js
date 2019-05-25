import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { TextField } from '@material-ui/core';

class ToDo extends Component {
  render() {
    console.log(this.props);
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
        <Checkbox color="primary" checked={this.props.feature.checked} />
        <TextField id="outlined-bare" placeholder={this.props.feature.text} margin="normal" variant="outlined" />
      </div>
    );
  }
}

export default ToDo;
