import React from 'react'
import { Alert, AsyncStorage, StyleSheet, TouchableHighlight, Text, View } from 'react-native'
import MapView from 'react-native-maps'

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'purple',
    height: '10%',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  map: {
    height: '90%',
    width: '100%',
  },
  text: {
    color: 'white',
    fontSize: 36,
  },
})

const saveCoords = async coord => {
  try {
    await AsyncStorage.setItem('latitude', coord.latitude.toString())
    await AsyncStorage.setItem('longitude', coord.longitude.toString())
  } catch (err) {
    Alert.alert(err.message)
  }
}

const getCoords = async () => {
  try {
    const latitude = await AsyncStorage.getItem('latitude')
    const longitude = await AsyncStorage.getItem('longitude')
    if (latitude && longitude) {
      return {
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
      }
    }
  } catch (err) {
    Alert.alert(`Error getting coordinate: ${err}`)
  }
  return undefined
}

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

  componentDidMount = () => {
    getCoords().then(coords => {
      if (coords) {
        this.setState({coords})
      }
    })
  }

  render() {
    return (
      <View>
        <MapView style={styles.map} initialRegion={this.region}>
          {this._marker()}
        </MapView>
        <TouchableHighlight style={styles.button} onPress={this._onButtonClick}>
          <Text style={styles.text}>Mark</Text>
        </TouchableHighlight>
      </View>
    )
  }

  _marker = () => {
    const coords = this.state.coords
    if (coords) {
      return <MapView.Marker
        coordinate={coords}
        title="Car"
        description="You Parked Here!"
      />
    } else {
      return undefined
    }
  }

  _onButtonClick = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const coords = position.coords
        saveCoords(coords)
        this.setState({coords})
      },
      (err) => { Alert.alert(`Error getting location: ${err}`) }
    )
  }
}
