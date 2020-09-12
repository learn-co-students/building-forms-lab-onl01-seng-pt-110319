// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ''
  };

  handleInputChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: '',
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input type='text' name='name' onChange={this.handleInputChange}/>
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default BandInput
