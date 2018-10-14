import React from 'react';
import { Alert, StyleSheet, TouchableHighlight, Text, View } from 'react-native';
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps';

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
});

export default class App extends React.Component {

  region = {
    latitude: 39.973960,
    longitude: -75.130620,
    latitudeDelta: 0.0111,
    longitudeDelta: 0.0111,
  }

  state = {
    coords: undefined
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
    );
  }

  _marker = _ => {
    const coords = this.state.coords;
    if (coords) {
      return <Marker
        coordinate={coords}
        title="Car"
        description="You Parked Here!"
      />
    } else {
      return undefined;
    }
  }

  _onButtonClick = _ => {
    navigator.geolocation.getCurrentPosition(
      position => { this.setState({coords: position.coords}) },
      _ => { Alert.alert(`Error getting location: ${err}`) }
    );
  }
}
