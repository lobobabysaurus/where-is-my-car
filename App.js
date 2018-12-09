import { createStackNavigator, createAppContainer } from 'react-navigation'

import * as routes from './lib/routes'
import HistoryScreen from './lib/containers/HistoryScreen'
import MapScreen from './lib/containers/MapScreen'

const screens = {}
screens[routes.HISTORY] = HistoryScreen
screens[routes.MAP] = MapScreen
const AppNavigator = createStackNavigator(screens, {
  initialRouteName: 'Map'
})

export default createAppContainer(AppNavigator)
