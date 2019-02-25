import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react'

import { LocationApi } from '../../api'
import { Google } from '../../config'

class MapContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      center: {
        lat: 40.854885,
        lng: -88.081807
      }
    }
  }

  onMapClicked = async (mapProps, map, event) => {
    let response = await LocationApi.getCountryByCoords({lat: event.latLng.lat(), lng: event.latLng.lng()})
    console.log(response)
    this.props.handlermap(response)
  }
  render() {
    return(
        <Map 
          google={this.props.google}
          gestureHandling= 'none'
          zoom={3}
          zoomControl={false}
          onClick={this.onMapClicked}
        ></Map>
    )
  }
}

export default GoogleApiWrapper(
  { apiKey: Google.KEY}
)(MapContainer)


