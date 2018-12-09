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
    coords: undefined,
  }

  componentDidMount = async () => {
    const coords = await getCoords()
    if (coords) {
      this.setState({coords})
    }
  }

  render() {
    return (
      <View style={style.container}>
        <MarkedMap coords={this.state.coords} region={this.region}/>
        <MarkButton onPress={this._updateLocation} />
      </View>
    )
  }

  _updateLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const {coords} = position
        saveCoords(coords)
        this.setState({coords})
      },
      (err) => Alert.alert(`Error getting location: ${err}`)
    )
  }
}
