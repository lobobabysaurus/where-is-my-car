import React from 'react'
import renderer from 'react-test-renderer'

import { MarkButton, MarkedMap } from '../../lib/components'

jest.mock('react-native-maps', () => {
  const React = require.requireActual('react');
  const MapView = require.requireActual('react-native-maps');

  class MockCallout extends React.Component {
    render() {
      return React.createElement('Callout', this.props, this.props.children);
    }
  }

  class MockMarker extends React.Component {
    render() {
      return React.createElement('Marker', this.props, this.props.children);
    }
  }

  class MockMapView extends React.Component {
    render() {
      return React.createElement('MapView', this.props, this.props.children);
    }
  }

  MockCallout.propTypes = MapView.Callout.propTypes;
  MockMarker.propTypes = MapView.Marker.propTypes;
  MockMapView.propTypes = MapView.propTypes;
  MockMapView.Marker = MockMarker;
  MockMapView.Callout = MockCallout;
  return MockMapView;
});

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
})
