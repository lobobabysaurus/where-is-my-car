import PropTypes from 'prop-types'
import React from 'react'
import { TouchableHighlight, Text, View } from 'react-native'

import styles from '../styles'

import GreenBlueGradient from './GreenBlueGradient'

export const HeaderButton = ({onPress, children}) =>
  <TouchableHighlight
    style={styles.headerButton}
    onPress={onPress}>
    <Text style={styles.text}>{children}</Text>
  </TouchableHighlight>

HeaderButton.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
}

const HeaderSection = ({children}) =>
  <View style={styles.headerSection}>{children}</View>

HeaderSection.propTypes = {
  children: PropTypes.node,
}

const Header = ({leftContent, title, rightContent}) =>
  <GreenBlueGradient style={styles.headerContainer}>
    <View style={styles.header}>
      <HeaderSection>{leftContent}</HeaderSection>
      <HeaderSection><Text style={styles.text}>{title}</Text></HeaderSection>
      <HeaderSection>{rightContent}</HeaderSection>
    </View>
  </GreenBlueGradient>

Header.propTypes = {
  leftContent: PropTypes.node,
  rightContent: PropTypes.node,
  title: PropTypes.string.isRequired,
}

export default Header
