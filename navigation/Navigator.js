import { createStackNavigator, createAppContainer } from 'react-navigation';
import Main from '../src/Main';
import Home from '../src/Home';
import Profile from '../src/Profile';

const RootStack = createStackNavigator({
  Home: { screen: Home },
  Main: { screen: Main },
  Profile: { screen: Profile}
});

const AppNavigator = createAppContainer(RootStack);

export default AppNavigator;