import React from 'react'
import MapView from 'react-native-maps'
import PropTypes from 'prop-types'
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

export const MarkedMap = ({coords, region}) => {
  const marker = coords
    ? <MapView.Marker
      coordinate={coords}
      title="Car"
      description="You Parked Here!" />
    : undefined
  return(
    <MapView style={styles.map} initialRegion={region}>
      {marker}
    </MapView>
  )
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
