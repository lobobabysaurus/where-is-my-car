import PropTypes from 'prop-types'
import React from 'react'
import { TouchableHighlight, Text } from 'react-native'

import styles from '../styles'

import GreenBlueGradient from './GreenBlueGradient'

const MarkButton = ({onPress}) =>
  <GreenBlueGradient style={styles.buttonContainer}>
    <TouchableHighlight style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Mark</Text>
    </TouchableHighlight>
  </GreenBlueGradient>

MarkButton.propTypes = {
  onPress: PropTypes.func.isRequired,
}

export default MarkButton
