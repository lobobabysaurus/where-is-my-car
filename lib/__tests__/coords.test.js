import MockAsyncStorage from 'mock-async-storage'

import { getCoords, saveCoords } from '../coords'

const mockImpl = new MockAsyncStorage()
jest.mock('AsyncStorage', () => mockImpl)

const checkCoords = async (added, expected) => {
  const savedCoords = await saveCoords(added)
  const retrievedCoords = await getCoords()
  expect(retrievedCoords).toEqual(expected)
  expect(savedCoords).toEqual(retrievedCoords)
}

describe('Coordinate interactions', () => {
  it('should support saving and getting coordinates', async () => {
    const originalCoords = await getCoords()
    expect(originalCoords).toBeNull()

    const firstBatch = {latitude: 5, longitude: 6}
    await checkCoords(firstBatch, [firstBatch])

    const secondBatch = {latitude: 8, longitude: 9}
    await checkCoords(secondBatch, [firstBatch, secondBatch])
  })
})
