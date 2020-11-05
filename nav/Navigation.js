import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import GoogleSignIn from '../src/screens/GoogleSignIn';
import Home from '../src/screens/Home'

const AppNavigator = createStackNavigator({
   
    GoogleSignIn:{
      screen:GoogleSignIn,
      navigationOptions:({headerShown:false})
    },
   Home: {
    screen: Home,
  },
});

export default createAppContainer(AppNavigator);