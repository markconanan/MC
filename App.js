import React from 'react';
import { View } from 'react-native'
import Haircut from './components/Haircut'
import Profile from './components/Profile'
import Receipts from './components/Receipts'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'



const TabNavigator = createAppContainer(createBottomTabNavigator({
  Profile: Profile,
  Haircut: Haircut,
  Receipts: Receipts,
},
  {
    tabBarOptions: {
      activeTintColor: "#68844A",
      showIcon: true,
      showLabel: true,
      labelStyle: {
        fontSize: 14
      },
      style: {}
    },
    navigationOptions: {
      tabVisiable: true,
      activeTintColor: "68844A",
      animationEnabled: true
    }
  }
))


export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TabNavigator />
      </View>
    )
  }
}


