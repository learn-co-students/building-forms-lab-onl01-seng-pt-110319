import React, { Component } from 'react'
import Bands from '../components/Bands'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput';

class BandsContainer extends Component {

    


  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands}/>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)