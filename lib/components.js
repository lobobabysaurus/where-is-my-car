import { Location, MapView } from 'expo'
import PropTypes from 'prop-types'
import React from 'react'
import { TouchableHighlight, Text } from 'react-native'

import styles from './styles'

export const MarkButton = ({onPress}) => (
  <TouchableHighlight style={styles.button} onPress={onPress}>
    <Text style={styles.text}>Mark</Text>
  </TouchableHighlight>
)

MarkButton.propTypes = {
  onPress: PropTypes.func.isRequired,
}

export class MarkedMap extends React.Component {

  state = {
    address: undefined,
  }

  componentDidMount = async () => {
    const {coords} = this.props
    this._updateAddress(coords)
  }

  componentDidUpdate = async (oldProps) => {
    const {coords} = this.props
    if (coords && (coords !== oldProps.coords)) {
      this._updateAddress(coords)
    }
  }

  render() {
    const {coords, region} = this.props
    const marker = coords
      ? <MapView.Marker
        coordinate={coords}
        title="Car"
        description={this._getMarkerDescription()} />
      : undefined
    return(
      <MapView style={styles.map} initialRegion={region}>
        {marker}
      </MapView>
    )
  }

  _getMarkerDescription = () => {
    let location = 'Here'
    if (this.state.address) {
      location = `On ${this.state.address.street}`
    }
    return `You Parked ${location}!`
  }

  _updateAddress = async (coords) => {
    if (coords) {
      const addresses = await Location.reverseGeocodeAsync(coords)
      if (addresses.length) {
        const address = addresses[0]
        this.setState({address})
      }
    }
  }
}

MarkedMap.propTypes = {
  coords: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
  }),
  region: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    latitudeDelta: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    longitudeDelta: PropTypes.number.isRequired,
  }).isRequired,
}
