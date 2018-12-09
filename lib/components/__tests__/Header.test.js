import React from 'react'
import { Text } from 'react-native'
import renderer from 'react-test-renderer'

import Header, { HeaderButton } from '../Header'

describe('HeaderButton', () => {
  test('renders correctly', () => {
    const component = renderer.create(
      <HeaderButton onPress={jest.fn()}>
           Button Text
      </HeaderButton>
    ).toJSON()
    expect(component).toMatchSnapshot()
  })
})

describe('Header', () => {
  test('renders with missing sections correctly', () => {
    const component = renderer.create(
      <Header title="Only Title"/>
    ).toJSON()
    expect(component).toMatchSnapshot()
  })

  test('renders with all sections correctly', () => {
    const leftContent = <Text>Left Content</Text>
    const rightContent = <Text>Right Content</Text>
    const component = renderer.create(
      <Header
        leftContent={leftContent}
        rightContent={rightContent}
        title="All Three"/>
    ).toJSON()
    expect(component).toMatchSnapshot()
  })
})
