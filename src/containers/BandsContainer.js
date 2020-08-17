import React, { Component } from 'react'
import BandInput from '../components/BandInput';
import Bands from '../components/Bands'
import {connect} from 'react-redux'

class BandsContainer extends Component {
  
  render() {
  //   const Bands = props => {
  //     const bands = props.bands.map((band,index) => {
  //         return <li key={index}>{band.name}</li>
  //     })
  
  //     return (
  //         <div>
  //             {bands}
  //         </div>
  //     )
  // }
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands}/>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
   addBand:
    band => dispatch({ type: 'ADD_BAND', band}) 
  })

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
