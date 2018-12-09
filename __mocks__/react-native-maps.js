import React from 'react'
import MapView from 'react-native-maps'

const MockCallout = (props) => (
  React.createElement('Callout', props, props.children)
)

const MockMarker = (props) => (
  React.createElement('Marker', props, props.children)
)

const MockMapView = (props) => (
  React.createElement('MapView', props, props.children)
)

MockCallout.propTypes = MapView.Callout.propTypes
MockMarker.propTypes = MapView.Marker.propTypes
MockMapView.propTypes = MapView.propTypes
MockMapView.Marker = MockMarker
MockMapView.Callout = MockCallout

export default MockMapView
