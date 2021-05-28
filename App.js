import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import HomeworkScreen2_16 from './src/screens/HomeworkScreen2_16';
import ListScreen from './src/screens/ListScreen';
import WebView from './src/screens/WebView';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Homework2_16: HomeworkScreen2_16,
    List: ListScreen,
    Web: WebView,
  },
  {
    initialRouteName: 'List',
    defaultNavigationOptions: {
      title: 'React Native App',
    },
  }
);

export default createAppContainer(navigator);
