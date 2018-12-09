import { createStackNavigator, createAppContainer } from 'react-navigation'

import * as routes from './lib/routes'
import HistoryScreen from './lib/containers/HistoryScreen'
import MapScreen from './lib/containers/MapScreen'

const screens = [
  [routes.HISTORY, HistoryScreen],
  [routes.MAP, MapScreen],
].reduce(
  (map, [route, screen]) => {
    map[route] = screen
    return map
  },
  {})
const AppNavigator = createStackNavigator(screens, {
  initialRouteName: 'Map'
})

export default createAppContainer(AppNavigator)
