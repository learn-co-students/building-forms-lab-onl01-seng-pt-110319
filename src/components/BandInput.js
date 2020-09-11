// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
   state = {
     name: ""
   }
   

   handeOnChange = event => {
     this.setState({
       name: event.target.value
     })
   } 

   handleSubmit = event => {
     event.preventDefault(); 
     this.props.addBand(this.state)
     this.setState({
       name: ""
     })
   }
  render() {
    return(
      <div>
       <form onSubmit={(event) => this.handleSubmit(event)}>
         <input type="text" onChange={(event)  => this.handeOnChange(event)}/>
       </form>
      </div>
    )
  }
}



export default BandInput
