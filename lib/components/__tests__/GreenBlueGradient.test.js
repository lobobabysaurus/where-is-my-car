import React from 'react'
import { Text } from 'react-native'
import renderer from 'react-test-renderer'

import GreenBlueGradient from '../GreenBlueGradient'

describe('GreenBlueGradient', () => {
  test('renders correctly', () => {
    const component = renderer.create(
      <GreenBlueGradient style={{maxWidth: 23}}>
        <Text>Im in a gradient</Text>
      </GreenBlueGradient>
    ).toJSON()
    expect(component).toMatchSnapshot()
  })
})
