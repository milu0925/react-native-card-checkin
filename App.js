import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import NavbarIcon from './src/components/NavbarIcon';
import HomeScreen from './src/screens/HomeScreen';
import DateScreen from './src/screens/DateScreen';
import ListScreen from './src/screens/ListScreen';
import AnalysisScreen from './src/screens/AnalysisScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {backgroundColor: '#2E354F'},
          tabBarActiveTintColor: '#ffffff',
          tabBarInactiveTintColor: '#7D839B',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color}) => <NavbarIcon name="index" color={color} />,
          }}
        />
        <Tab.Screen
          name="Date"
          component={DateScreen}
          options={{
            tabBarIcon: ({color}) => <NavbarIcon name="date" color={color} />,
          }}
        />
        <Tab.Screen
          name="List"
          component={ListScreen}
          options={{
            tabBarIcon: ({color}) => <NavbarIcon name="list" color={color} />,
          }}
        />
        <Tab.Screen
          name="Analysis"
          component={AnalysisScreen}
          options={{
            tabBarIcon: ({color}) => (
              <NavbarIcon name="analysis" color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
