import store from 'react-native-simple-store'
import { Alert } from 'react-native'

const coordsKey = 'coordinates'

export const saveCoords = async coord => {
  try {
    await store.push(coordsKey, coord)
    return await getCoords()
  } catch (err) {
    Alert.alert(`Error saving coordinates ${err.message}`)
  }
  return undefined
}

export const getCoords = async () => {
  try {
    return await store.get(coordsKey)
  } catch (err) {
    Alert.alert(`Error getting coordinate: ${err.message}`)
  }
  return undefined
}
