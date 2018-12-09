import React, { Component } from 'react'
import { Text, View } from 'react-native'

import Header, { HeaderButton } from '../components/Header'
import { getCoords } from '../coords'
import styles from '../styles'

export default class HistoryScreen extends Component {

  static navigationOptions = ({navigation}) => {
    const mapButton =
      <HeaderButton onPress={() => navigation.goBack()}>
        Map
      </HeaderButton>
    return {
      header: <Header leftContent={mapButton} title="History"/>
    }
  }

  state = {
    allCoords: [],
  }

  componentDidMount = async () => {
    const coords = await getCoords()
    if (coords) {
      this.setState({allCoords: coords.reverse()})
    }
  }

  render() {
    const history = this.state.allCoords.map((coord, idx) => {
      const content = `${coord.latitude} , ${coord.longitude}`
      return <Text key={idx}>{content}</Text>
    })
    return <View style={styles.container}>{history}</View>
  }
}
