import { Location, Permissions } from 'expo'
import React from 'react'
import { Alert, View } from 'react-native'

import { getCoords, saveCoords } from '../coords'
import Header, { HeaderButton } from '../components/Header'
import MarkButton from '../components/MarkButton'
import MarkedMap from '../components/MarkedMap'
import * as routes from '../routes'
import styles from '../styles'

export default class MapScreen extends React.Component {

  static navigationOptions = ({navigation}) => {
    const historyButton =
      <HeaderButton onPress={() => navigation.navigate(routes.HISTORY)}>
          History
      </HeaderButton>
    return {
      header: <Header title="Map" rightContent={historyButton}/>
    }
  }

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
      <View style={styles.container}>
        <MarkedMap coords={this.state.markedCoords} region={this.region}/>
        <MarkButton onPress={this._trackLocation} />
      </View>
    )
  }

  _trackLocation = async () => {
    try {
      const { status } = await Permissions.askAsync(Permissions.LOCATION)
      if (status === 'granted') {
        const position = await Location.getCurrentPositionAsync({enableHighAccuracy: true})
        const coords = await saveCoords(position.coords)
        this._updateCoordinates(coords)
      } else {
        Alert.alert('Location permission not granted')
      }
    } catch (err) {
      Alert.alert(`Error getting location: ${err}`)
    }
  }

  _updateCoordinates = (coords) => {
    this.setState({
      allCoords: coords,
      markedCoords: coords[coords.length-1]
    })
  }
}
