// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  constructor(props) {
  	super(props);
  	this.state = {
  		name: '',
  	}
  }

  handleChange = (event) => {
  	this.setState({
  		name: event.target.value
  	});
  }

  handleSubmit = (event) => {
  	event.preventDefault()
  	this.props.addBand(this.state.name)
  }

  render() {
    return(
      <div>
        Band Input
      		<form onSubmit={this.handleSubmit}>
      		<label>Add Band</label>
      			<input type = "text" onChange={(event) => this.handleChange(event)} value={this.state.name}/>
      			<input type = "submit"/>
      		</form>
      </div>
    )
  }
}

export default BandInput