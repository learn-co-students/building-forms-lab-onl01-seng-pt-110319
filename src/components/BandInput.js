import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: '',
  }


  changeHandler = event => {
    this.setState({
      name: event.target.value
    })
  }

  submitHandler = event => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: ''
    })
  }


  render() {
    return(
      <div>
        Band Input:
        <form onSubmit={this.submitHandler}>
          <label>Band Name</label>
          <input type="text" onChange={this.changeHandler} value={this.state.name}/>
          <input type="SUBMIT" />
          </form>
       
      </div>
    )
  }
}


export default BandInput;
