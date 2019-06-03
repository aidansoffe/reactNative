import { createStackNavigator, createAppContainer } from 'react-navigation';
import Main from '../src/Main';
import Home from '../src/Home';
import Profile from '../src/Profile';
import Resource from '../src/Resource';
import Friend from '../src/Friend';

const RootStack = createStackNavigator({
  Home: { screen: Home },
  Main: { screen: Main },
  Profile: { screen: Profile},
  Resource: { screen: Resource},
  Friend: { screen: Friend},
});

const AppNavigator = createAppContainer(RootStack);

export default AppNavigator;