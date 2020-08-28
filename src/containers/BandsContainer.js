import React, { Component } from 'react';
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';
import Bands from '../components/Bands'

class BandsContainer extends Component {
  render() {
    console.log(this.state)
    return(
      <div>
        BandsContainer
        <BandInput addBand={this.props.addBand}/>
        <ul>
          <Bands bands={this.props.bands} />
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
