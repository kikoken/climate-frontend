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
    let response = await LocationApi.getCapitalClimate([event.latLng.lat(), event.latLng.lng()].join(','))
    console.log(response)
    if(response.data)
      this.props.handlermap(response.data)
    else
      console.log('no exste datos de la zona')
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


