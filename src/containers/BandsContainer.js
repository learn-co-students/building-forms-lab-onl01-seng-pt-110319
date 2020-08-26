import React, { Component } from 'react';
import BandInput from '../components/BandInput.js'
import { connect } from 'react-redux';

class BandsContainer extends Component {
  render() {
    return(
      <div>
      <BandInput addBand={this.props.addBand} />
        BandsContainer
        <ul>
    {this.props.bands.map((band) => <li key={band.name}>{band.name}</li>)}
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  // console.log(dispatch)
  return {
    addBand: bandName => dispatch({ type: 'ADD_BAND', payload: bandName})
  }
}

const mapStateToprops = state => {
  return {bands: state.bands}
}

export default connect(mapStateToprops, mapDispatchToProps)(BandsContainer);
