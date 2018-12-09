import React from 'react'
import { Text, View } from 'react-native'

import Header, { HeaderButton } from '../components/Header'

const HistoryScreen = () => <View><Text>Bah</Text></View>

HistoryScreen.navigationOptions = ({navigation}) => {
  const mapButton =
    <HeaderButton onPress={() => navigation.goBack()}>
      Map
    </HeaderButton>
  return {
    header: <Header leftContent={mapButton} title="History"/>
  }
}

export default HistoryScreen
