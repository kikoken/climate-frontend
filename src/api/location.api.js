import { Google } from '../config'
class LocationApi {
  constructor(apikey) {
    this.uri = '//maps.googleapis.com/maps/api/geocode/json?latlng='
    this.googleKey = apikey
  }
  
  async getCountryByCoords(coords) {
    let response = await fetch(`${this.uri}${coords.lat},${coords.lng}&sensor=false&key=${this.googleKey}`)
    let country = await response.json()

    return country
  }
}

export default new LocationApi(Google.KEY)