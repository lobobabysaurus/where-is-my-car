import React from 'react'
import renderer from 'react-test-renderer'

import MarkButton from '../MarkButton'

describe('MarkButton', () => {
  test('renders correctly', () => {
    const component = renderer.create(
      <MarkButton onPress={jest.fn()} />
    ).toJSON()
    expect(component).toMatchSnapshot()
  })
})
