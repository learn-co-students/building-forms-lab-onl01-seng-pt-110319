// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ''
  }

  onInputChange(event) {
    this.setState({
      name: event.target.value
    })
  };

  onFormSubmit(event) {
    event.preventDefault();

    this.props.addBand(this.state);
    this.setState({
      name: ''
    })
  };

  render() {
    return(
      <div>
        <form onSubmit={(e) => this.onFormSubmit(e)}>
          <input onChange={(e) => this.onInputChange(e)} type="text" value={this.state.name} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
