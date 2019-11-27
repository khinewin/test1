import React, {Component} from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import {Header, Card, Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5'

import  {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createBottomTabNavigator} from 'react-navigation-tabs'

import Newpost from './components/Newpost'
import Welcome from './components/Welcome'

export default class App extends Component {
    render(){

      const MyStack=createStackNavigator({
          Welcome: {
            screen: Welcome,
            //navigationOptions:{
             // header:null
            //}
          },
          Newpost: {
            screen: Newpost
          }
      },{
        initialRouteName : "Welcome",
        defaultNavigationOptions:{
            header: null
        }
      })

      const MyDrawer=createDrawerNavigator({
        Welcome:{
          screen: Welcome,
          navigationOptions:{
            drawerLabel: "Dashboard",
            drawerIcon:({tintColor})=><Icon name="home" size={14} color={tintColor}></Icon>
          }
        },
        Newpost:{
          screen:Newpost,
          navigationOptions:{
            drawerLabel: "Add Post",
            drawerIcon:({tintColor})=><Icon name="plus-circle" size={14} color={tintColor}></Icon>
          }
        }
      },{
        initialRouteName: "Welcome",
        drawerPosition: "right",
        drawerWidth: 200
      }
      )


      const MyTab=createBottomTabNavigator({
        Welcome: {
          screen: Welcome,
          navigationOptions:{
            tabBarLabel: "Dashboard",
            tabBarIcon:({tintColor})=><Icon name="home" size={14} color={tintColor}></Icon>
          }
        },
        Newpost:{
          screen:Newpost,
          navigationOptions:{
            tabBarLabel: "Add Post"
          }
        }
      })

      const AppContainer=createAppContainer(MyTab)

      return(<AppContainer></AppContainer>);
    }
}