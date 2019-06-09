import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

// Import screens
import SavedScreen from './Screens/SavedScreen';
import ChatScreen from './Screens/ChatScreen';
import BookmarkScreen from './Screens/BookMarkScreen';
import NewsScreen from './Screens/NewsScreen';

// Import components
import AddButton from './Components/AddButton';

// import icons
import FAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const size = 26;

const RouteConfig = {
  Saved: {
    screen: SavedScreen,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => (
        <FAwesomeIcon
          name="heart"
          color={tintColor}
          size={size}
        />
      ),
    }),
  },
  Chat: {
    screen: ChatScreen,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => (
        <FAwesomeIcon
          name="comments"
          color={tintColor}
          size={28}
        />
      ),
    }),
  },
  add: {
    screen: ChatScreen,
    navigationOptions: () => ({
      tabBarButtonComponent: () => (
        <AddButton />
      ),
    }),
  },
  News: {
    screen: NewsScreen,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => (
        <FAwesomeIcon
          name="align-left"
          color={tintColor}
          size={size}
        />
      ),
    }),
  },
  Bookmark: {
    screen: BookmarkScreen,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => (
        <FAwesomeIcon
          name="tags"
          color={tintColor}
          size={size}
        />
      ),
    }),
  },
};

const BottomNavigatorConfig = {
  tabBarOptions: {
    activeTintColor: 'rgb(255,255,255)',
    inactiveTintColor: 'rgb(89, 102, 139)',
    style: {
      backgroundColor: 'rgb(21, 31, 53)',
    },
    showLabel: false,
  },
};

const TabNavigator = createBottomTabNavigator(RouteConfig, BottomNavigatorConfig);

// create the App Navigator
export default createAppContainer(TabNavigator);
