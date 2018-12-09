import React from 'react'
import { Alert, View } from 'react-native'

import { getCoords, saveCoords } from './lib/coords'
import { MarkButton, MarkedMap } from './lib/components'
import style from './lib/styles'

export default class App extends React.Component {

  region = {
    latitude: 39.973960,
    latitudeDelta: 0.0111,
    longitude: -75.130620,
    longitudeDelta: 0.0111,
  }

  state = {
    allCoords: [],
    markedCoords: undefined,
  }

  componentDidMount = async () => {
    const coords = await getCoords()
    if (coords) {
      this._updateCoordinates(coords)
    }
  }

  render() {
    return (
      <View style={style.container}>
        <MarkedMap coords={this.state.markedCoords} region={this.region}/>
        <MarkButton onPress={this._trackLocation} />
      </View>
    )
  }

  _trackLocation = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const coords = await saveCoords(position.coords)
        this._updateCoordinates(coords)
      },
      (err) => Alert.alert(`Error getting location: ${err}`)
    )
  }

  _updateCoordinates = (coords) => {
    this.setState({
      allCoords: coords,
      markedCoords: coords[coords.length-1]
    })
  }
}
