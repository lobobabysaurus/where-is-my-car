import { LinearGradient } from 'expo'
import PropTypes from 'prop-types'
import React from 'react'

const GreenBlueGradient = ({children, style}) => {
  const startColor = '#50C878'
  const endColor = '#00008B'
  const gradient = [startColor, endColor]
  return <LinearGradient style={style} colors={gradient}>
    {children}
  </LinearGradient>
}

GreenBlueGradient.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
}

export default GreenBlueGradient
