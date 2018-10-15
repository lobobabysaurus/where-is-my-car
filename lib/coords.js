import { Alert, AsyncStorage } from 'react-native'

export const saveCoords = async coord => {
  try {
    await AsyncStorage.setItem('latitude', coord.latitude.toString())
    await AsyncStorage.setItem('longitude', coord.longitude.toString())
  } catch (err) {
    Alert.alert(err.message)
  }
}

export const getCoords = async () => {
  try {
    const latitude = await AsyncStorage.getItem('latitude')
    const longitude = await AsyncStorage.getItem('longitude')
    if (latitude && longitude) {
      return {
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
      }
    }
  } catch (err) {
    Alert.alert(`Error getting coordinate: ${err}`)
  }
  return undefined
}
