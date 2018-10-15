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
  let marker
  if (coords) {
    marker = <MapView.Marker
      coordinate={coords}
      title="Car"
      description="You Parked Here!"
    />
  } else {
    marker = undefined
  }
  return(
    <MapView style={styles.map} initialRegion={region}>
      {marker}
    </MapView>
  )
}

MarkedMap.propTypes = {
  coords: PropTypes.object,
  region: PropTypes.object,
}
