import React from 'react'
import renderer from 'react-test-renderer'

import HistoryScreen from '../HistoryScreen'

describe('HistoryScreen', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<HistoryScreen />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
