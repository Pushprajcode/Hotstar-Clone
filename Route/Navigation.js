import React from 'react';
import { Image} from 'react-native';
import Home from '../screens/Home';
import Tv from '../screens/Tv';
import Sports from '../screens/Sports';
import Movie from '../screens/Movie';
import {
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
const MyTabs = () => {
  return (
    
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
          backgroundColor: '#000000',
          },
          tabBarLabelStyle: {
            fontFamily: 'Verdana-Italic',
          },
          tabBarActiveTintColor: '#fff',
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={
                  focused
                    ? require('../src/assets/images/home(1).png')
                    : require('../src/assets/images/home(2).png')
                }
                style={{width: 20, height: 20}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="TV"
          component={Tv}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={
                  focused
                    ? require('../src/assets/images/livetv.png')
                    : require('../src/assets/images/tv.png')
                }
                style={{width: 26, height: 26}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Movie"
          component={Movie}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={focused ?require('../src/assets/images/video.png'):require('../src/assets/images/video.png')}
                style={{width: 25, height: 25}}
              />
            ),
            // tabBarLabelStyle
          }}
        />
        <Tab.Screen
          name="Sports"
          component={Sports}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={focused?require('../src/assets/images/cricket.png'):require('../src/assets/images/cricket-bat.png')}
                style={{width: 20, height: 20}}
              />
            ),
          }}
        />
      </Tab.Navigator>
 
  );
};
export default MyTabs;
