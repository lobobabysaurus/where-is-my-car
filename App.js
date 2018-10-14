import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  text: {
    color: '#fff',
    minWidth: '35%',
    textAlign: 'center',
  },
});

export default class App extends React.Component {

  state = {
    coords: undefined
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this._formatCoordinates()}</Text>
        <Button
          color='purple'
          onPress={this._onButtonClick}
          title='Mark'
        />
      </View>
    );
  }

  _formatCoordinates = _ => {
    const coords = this.state.coords;
    if (coords) {
      return `${coords.latitude},${coords.longitude}`;
    } else {
      return "No Coordinates";
    }
  }

  _onButtonClick = _ => {
    navigator.geolocation.getCurrentPosition(
      this._onGeoSuccess,
      this._onGeoError);
  }

  _onGeoSuccess = (position) => {
    this.setState({coords: position.coords});
  }

  _onGeoError(err) {
    Alert.alert(`Error getting location: ${err}`);
  }

}
