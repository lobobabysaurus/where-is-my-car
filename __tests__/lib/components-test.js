import React from 'react'
import MapView from 'react-native-maps'
import renderer from 'react-test-renderer'

import { MarkButton, MarkedMap } from '../../lib/components'

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

describe('MarkButton', () => {
  test('renders correctly', () => {
    const onPress = () => {}
    const component = renderer.create(<MarkButton onPress={onPress} />).toJSON()
    expect(component).toMatchSnapshot()
  })
})

describe('MarkedMap', () => {
  const region = {
    latitude: 0,
    latitudeDelta: 1,
    longitude: 0,
    longitudeDelta: 1,
  }

  test('renders correctly', () => {
    const component = renderer.create(<MarkedMap region={region} />).toJSON()
    expect(component).toMatchSnapshot()
  })

  test('should render a map for the provided region', () => {
    const component =renderer.create(<MarkedMap region={region} />)
    const map = component.root.findByType(MapView)
    expect(map.props.initialRegion).toBe(region)
  })

  test('should not render any markers by default', () => {
    const component = renderer.create(<MarkedMap region={region} />)
    const markers = component.root.findAllByType(MapView.Marker)
    expect(markers).toHaveLength(0)
  })

  test('should render a marker for provided coordinates', () => {
    const coords = {
      latitude: 5,
      longitude: 5,
    }
    const component = renderer.create(
      <MarkedMap region={region} coords={coords} />
    )
    const marker = component.root.findByType(MapView.Marker)
    expect(marker.props.coordinate).toEqual(coords)
  })
})
