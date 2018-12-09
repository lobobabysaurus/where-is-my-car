import MockAsyncStorage from 'mock-async-storage'

import { getCoords, saveCoords } from '../coords'

const mockImpl = new MockAsyncStorage()
jest.mock('AsyncStorage', () => mockImpl)

describe('Coordinate interactions', () => {
  it('should support saving and getting coordinates', async () => {
    expect(await getCoords()).toBeNull()
    const coords = {latitude: 5, longitude: 6}
    await saveCoords(coords)
    expect(await getCoords()).toEqual(coords)
  })
})
