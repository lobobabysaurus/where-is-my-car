import store from 'react-native-simple-store'
import { Alert } from 'react-native'

export const saveCoords = async coord => {
  try {
    return await store.save('coordinates', coord)
  } catch (err) {
    Alert.alert(err.message)
  }
  return undefined
}

export const getCoords = async () => {
  try {
    return await store.get('coordinates')
  } catch (err) {
    Alert.alert(`Error getting coordinate: ${err}`)
  }
  return undefined
}
