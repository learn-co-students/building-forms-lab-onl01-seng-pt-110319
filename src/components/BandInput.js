import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ''
  }

  handleOnChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: ''
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Enter Band: </label>
          <input 
            text="name"
            value={this.state.name}
            placeholder="Name Here.."
            onChange={this.handleOnChange}
          />
        </form>
      </div>
    )
  }
}

export default BandInput
