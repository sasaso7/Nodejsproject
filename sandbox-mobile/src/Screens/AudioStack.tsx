import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AudioDetails } from './AudioDetails';
import { AudioScreen } from './AudioScreen';

// Audio have multiple screens - create a stack
const AudioStack = createStackNavigator();
export function AudioStackScreen() {
    return (
        <AudioStack.Navigator>
            <AudioStack.Screen name="Audio" component={AudioScreen} />
            <AudioStack.Screen name="AudioDetails" component={AudioDetails} />
        </AudioStack.Navigator>
    );
}