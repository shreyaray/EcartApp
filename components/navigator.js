import React,{Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const RootStack = createStackNavigator(
    {
        login: Login,
    },
    {
        initialRouteName: 'login',
    }
);

