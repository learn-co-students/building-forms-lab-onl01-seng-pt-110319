// Add BandInput component
import React, { Component } from 'react'


class BandInput extends Component {

  constructor(props){
    super(props);
    this.state={
        name: ""
    }
  }
  
  changeHandler=(event)=>{
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit=(event)=>{
    event.preventDefault()
    this.props.addBand(this.state)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        Enter Band: <input type="text" value={this.state.name} onChange={this.changeHandler}/>
        <input type="submit"/>
      </form>
   
    )
  }
}


export default BandInput
