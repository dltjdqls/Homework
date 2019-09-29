import MainPage from "./src/pages/MainPage";
import NamingPage from "./src/pages/NamingPage";
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
