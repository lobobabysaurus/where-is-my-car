import React from 'react'
import renderer from 'react-test-renderer'

import App from '../App'

jest.mock('react-native-maps', () => {
  const React = require.requireActual('react')
  const MapView = require.requireActual('react-native-maps')

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
  return MockMapView
})


describe('App', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
