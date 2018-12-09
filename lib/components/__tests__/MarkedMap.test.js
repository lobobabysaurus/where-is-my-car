import React from 'react'
import renderer from 'react-test-renderer'

import MarkedMap from '../MarkedMap'

describe('MarkedMap', () => {
  const region = {
    latitude: 0,
    latitudeDelta: 1,
    longitude: 0,
    longitudeDelta: 1,
  }

  test('renders correctly for the provided region with no markers by default', () => {
    const component = renderer.create(<MarkedMap region={region} />).toJSON()
    expect(component).toMatchSnapshot()
  })

  test('render a marker when a coordinate is provided', () => {
    const coords = {
      latitude: 5,
      longitude: 5,
    }
    const component = renderer.create(
      <MarkedMap region={region} coords={coords} />
    )
    expect(component).toMatchSnapshot()
  })
})
