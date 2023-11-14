import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './src/navigators/TabNavigator';
import LogInScreen from './src/screens/LogInScreen';
import PlayerScreen from './src/screens/PlayerScreen';
import SongInfoScreen from './src/screens/SongInfoScreen';
import { create } from 'react-test-renderer';
import { ScreenStackHeaderConfig } from 'react-native-screens';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Tab" component={TabNavigator} options={{animation:'default'}}/>
        <Stack.Screen name="LogIn" component={LogInScreen}options={{animation:'slide_from_right'}} />
        <Stack.Screen name="Player" component={PlayerScreen} options={{animation:'slide_from_bottom'}}/>
        <Stack.Screen name="SongInfo" component={SongInfoScreen}options={{animation:'slide_from_right'}} />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
};

export default App;

