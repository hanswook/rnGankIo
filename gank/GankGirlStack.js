import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import GankHomeConnect from './GankHomeConnect';
import GankGirlPage from './GankGirlPage';
const Stack = createStackNavigator();

class RootNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="GankHomeConnect" component={GankHomeConnect} />
          <Stack.Screen name="GankGirlPage" component={GankGirlPage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default RootNavigator;
