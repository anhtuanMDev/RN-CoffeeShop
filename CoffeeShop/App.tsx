import { View, Text } from 'react-native'
import React from 'react'
import { container } from './src/components/styles/screens'
import Welcome from './src/screens/users/Welcome'
import Naviagtion from './src/navigator/Naviagtion'

const App = () => {
  return (
    <View style={[container.flexAll]}>
      <Naviagtion/>
    </View>
  )
}

export default App