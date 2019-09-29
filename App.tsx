/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import MainPage from "./MainPage";
import NamingPage from "./NamingPage";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const App = createStackNavigator(
  {
    Home: {
      screen: MainPage,
      navigationOptions: () => ({
        header: null
      })
      },
    Second: {
      screen: NamingPage,
      navigationOptions: () => ({
        headerTitle: "추가"
      })
    }
  },
  {initialRouteName: "Home"}
)

export default createAppContainer(App);
