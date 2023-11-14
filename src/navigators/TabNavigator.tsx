import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import TicketScreen from '../screens/FavSongScreen';
import UserAccountScreen from '../screens/ProfileScreen';
import {COLORS, FONTSIZE, SPACING} from '../theme/theme';
import CustomIcon from '../components/CustomIcon';
import {View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/ProfileScreen';
import FvSongScreen from '../screens/FavSongScreen';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return(
        <Tab.Navigator 
        screenOptions={{
            tabBarHideOnKeyboard:true,
            headerShown:false,
            tabBarStyle:{
                backgroundColor:COLORS.Black,
                borderTopWidth:0,
                height:SPACING.space_10*10,

            },
        }}>
            <Tab.Screen 
             name="Home" 
             component={HomeScreen} 
             options={{
                tabBarShowLabel:false,
                tabBarIcon:({focused,color,size})=>{
                    return( 
                        <View 
                          style={[
                            styles.activeTabBackground,
                            focused?{backgroundColor:COLORS.Grey}:{},
                          ]}>
                            <CustomIcon
                              name="home"
                              color={COLORS.White}
                              size={FONTSIZE.size_30}
                            />
                        </View>
                    )
                },
             }} 
            />
            <Tab.Screen name="Search" component={SearchScreen} options={{
                tabBarShowLabel:false,
                tabBarIcon:({focused,color,size})=>{
                    return( 
                        <View
                          style={[
                            styles.activeTabBackground,
                            focused?{backgroundColor:COLORS.Grey}:{},
                          ]}>
                            <CustomIcon
                              name="search"
                              color={COLORS.White}
                              size={FONTSIZE.size_30}
                            />
                        </View>
                    )
                },
             }} />
            <Tab.Screen name="FavSong" component={FvSongScreen}options={{
                tabBarShowLabel:false,
                tabBarIcon:({focused,color,size})=>{
                    return( 
                        <View 
                          style={[
                            styles.activeTabBackground,
                            focused?{backgroundColor:COLORS.Grey}:{},
                          ]}>
                            <CustomIcon
                              name="heart"
                              color={COLORS.White}
                              size={FONTSIZE.size_30}
                            />
                        </View>
                    )
                },       
             }}  />
            <Tab.Screen name="Profile" component={ProfileScreen}options={{
                tabBarShowLabel:false,
                tabBarIcon:({focused,color,size})=>{
                    return( 
                        <View 
                          style={[
                            styles.activeTabBackground,
                            focused?{backgroundColor:COLORS.Grey}:{},
                          ]}>
                            <CustomIcon
                              name="user"
                              color={COLORS.White}
                              size={FONTSIZE.size_30}
                            />
                        </View>
                    )
                },
             }}  />
        </Tab.Navigator>
    )
};

const styles = StyleSheet.create({

    activeTabBackground:{
        backgroundColor:COLORS.Black,
        padding: SPACING.space_18,
        borderRadius:SPACING.space_18*10,

    },

});

export default TabNavigator;