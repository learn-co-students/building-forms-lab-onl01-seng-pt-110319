import React, { Component } from 'react';
import { connect } from 'react-redux';
import BandInput from '../components/BandInput'
import Bands from '../components/Bands'

class BandsContainer extends Component {

  render() {

  	const addBand = this.props.addBand
    return(
      <div>
        BandsContainer
        <BandInput addBand={addBand}/>
       	<Bands bands={this.props.bands}/>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => {
	return {
		addBand: (myState) => dispatch({type: 'ADD_BAND', payload: myState})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
