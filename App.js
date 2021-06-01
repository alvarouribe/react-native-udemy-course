import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import HomeworkScreen2_16 from './src/screens/HomeworkScreen2_16';
import ListScreen from './src/screens/ListScreen';
import WebView from './src/screens/WebView';
import ImageGallery from './src/screens/ImageGallery';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import NamesScreen from './src/screens/NamesScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Homework2_16: HomeworkScreen2_16,
    List: ListScreen,
    Web: WebView,
    Gallery: ImageGallery,
    Counter: CounterScreen,
    Colors: ColorScreen,
    Names: NamesScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'AlvaroApp',
    },
  }
);

export default createAppContainer(navigator);
