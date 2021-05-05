import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export const MyTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={'Nome'} />
            <Tab.Screen name="Settings" component={'Setting'} />
        </Tab.Navigator>
    );
};
